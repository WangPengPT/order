const archiver = require("archiver")
const AppStateRepository = require("../repositories/appStateRepository")
const { appState } = require("../state")
const User = require("../model/users")
const { UserService } = require("../services/userService")
const { MenuService } = require("../services/menuService")

class DatasController {
  constructor(appStateRepository = new AppStateRepository(appState), userService = new UserService(), menuService = new MenuService()) {
    this.appStateRepository = appStateRepository,
      this.userService = userService
      this.menuService = menuService
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

      this.appStateRepository.appState.updateAppState(data)

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
        res.status(400).json({message: '导入失败'})
      }
    } catch (err) {
      console.error(err)
      res.status(400).json({ message: '文件不是有效 JSON' })
    }
  }
}

module.exports = DatasController