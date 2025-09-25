const archiver = require("archiver")
const AppStateRepository = require("../repositories/appStateRepository")
const { appState, AppState } = require("../state")
const User = require("../model/users")
const { getPageImages, importPageImages, getImageAbsolutPath, getImagePath } = require('../filedb')
const { UserService } = require("../services/userService")
const { MenuService } = require("../services/menuService")
const { logger } = require('../utils/logger.js')
const AdmZip = require('adm-zip')
const { WebPageDesignService } = require("../services/webPageDesignService.js")

class DatasController {
  constructor(appStateRepository = new AppStateRepository(appState), userService = new UserService(), menuService = new MenuService(), pageService = new WebPageDesignService()) {
    this.appStateRepository = appStateRepository,
      this.userService = userService
    this.menuService = menuService,
      this.pageService = pageService
  }

  exportDatas = async (req, res) => {   // ← 改成箭头函数
    try {
      const appState = this.appStateRepository.appState.toJSON()
      const menu = this.appStateRepository.appState.menu
      const users = await this.userService.usersRepository.getAllUsers()

      if (!appState || !menu || !users) throw new Error("数据不完整，无法导出")

      // 确认数据没问题后再设置响应头
      res.setHeader('Content-Disposition', 'attachment; filename="files.zip"')
      res.setHeader('Content-Type', 'application/zip')

      const ar = archiver('zip', { zlib: { level: 9 } })
      ar.pipe(res)

      const files = [
        { name: 'appState.json', content: appState },
        { name: 'menu.json', content: menu },
        { name: 'users.json', content: users }
      ]

      files.forEach(file => {
        ar.append(JSON.stringify(file.content, null, 2), { name: file.name })
      })

      ar.finalize()
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: err.message })
    }
  }

  importAppState = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: '没有上传文件' })

    try {
      const content = req.file.buffer.toString('utf-8')  // 转字符串
      const data = JSON.parse(content)                   // 解析 JSON
      const newAppState = AppState.fromJSON(data)

      this.appStateRepository.appState.updateAppState(newAppState)

      res.json({ message: '导入成功', records: Array.isArray(data) ? data.length : 1 })
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: '文件不是有效 JSON' })
    }
  }

  importMenu = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: '没有上传文件' })

    try {
      const content = req.file.buffer.toString('utf-8')  // 转字符串
      const data = JSON.parse(content)                   // 解析 JSON

      await this.menuService.menuRespository.saveMenu(data)
      await this.menuService.loadMenu()
      //save menu

      res.json({ message: '导入成功', records: Array.isArray(data) ? data.length : 1 })
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: '文件不是有效 JSON' })
    }
  }

  importUsers = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: '没有上传文件' })

    try {
      const content = req.file.buffer.toString('utf-8')  // 转字符串
      const data = JSON.parse(content)                   // 解析 JSON

      const users = []
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        users.push(User.fromJSON(element))
      }

      const result = await this.userService.saveUsers(users)
      if (result.success) {
        res.json({ message: '导入成功', records: Array.isArray(data) ? data.length : 1 })
      } else {
        res.status(400).json({ message: '导入失败' })
      }
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: '文件不是有效 JSON' })
    }
  }

  exportPage = async (req, res) => {   // ← 改成箭头函数
    try {
      logger.info("导出页面数据")
      res.setHeader('Content-Disposition', 'attachment; filename="files.zip"')
      res.setHeader('Content-Type', 'application/zip')


      const id = Number(req.params.id)
      const page = await this.pageService.webPageRepository.getPageById(id)
      const images = getPageImages(page.imagesPath)
      if (!appState || !images) throw new Error("数据不完整，无法导出")


      const archive = archiver('zip', {
        zlib: { level: 9 } // 压缩等级
      });

      archive.pipe(res);

      images.forEach(filename => {
        const absolutPath = getImageAbsolutPath(page.imagesPath, filename)
        archive.file(absolutPath, { name: `${filename}` })
      })

      archive.append(JSON.stringify(page.toJSON()), { name: 'page.json' });

      archive.finalize();
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: err.message })
    }
  }

  importPage = async (req, res) => {
    logger.info("导入页面数据")
    if (!req.file) return res.status(400).json({ error: '未上传文件' })

    try {
      const zip = new AdmZip(req.file.buffer) // <-- 直接用内存 buffer
      const zipEntries = zip.getEntries()
      const jsonFiles = []
      const images = []
      zipEntries.forEach(entry => {
        if (entry.entryName.endsWith('.json')) {
          jsonFiles.push(JSON.parse(entry.getData().toString('utf-8'))) // 读取 JSON 字符串
        } else if (/\.(jpg|jpeg|png|webp|ico)$/i.test(entry.entryName)) {
          images.push({ name: entry.entryName, data: entry.getData() }) // buffer
        }
      })
      const pageData = jsonFiles[0]
      const uploaded = await this.pageService.importPage(pageData)
      if (!uploaded.success) {
        return res.status(400).json({ error: '数据导入失败' })
      }

      importPageImages(images, pageData.imagesPath)

    } catch (error) {
      console.error(error)
      res.status(400).json({ message: error.message })
    }

  }
}

module.exports = DatasController