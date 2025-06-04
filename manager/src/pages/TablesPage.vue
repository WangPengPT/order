<template>
    <div class="tables-page">

        <div class="tabs">
        <button
            v-for="s in ['全部', '空闲', '用餐中', '已预订', '已支付']"
            :key="s"
            :class="{ active: filterStatus === s }"
            @click="filterStatus = s"
        >
            {{ s }}
        </button>
        </div>

        <!-- 编辑模式开关按钮 -->
        <button @click="toggleEditMode" class="edit-mode-btn">
            {{ editMode ? '退出编辑模式' : '进入编辑模式' }}
        </button>

        <div class="table-grid">
            <div v-for="table in filteredTables" :key="table.id" class="table-card" :class="statusClass(table.status)"
                @click="!editMode && selectTable(table)">

                <!-- 编辑模式下点击不弹窗 -->
                <div class="table-id">桌号 {{ table.id }}</div>
                <div>{{ table.people }} / {{ table.maxPeople }} 人</div>
                <div class="status-text">{{ table.status }}</div>

                <!-- 💰 显示消费总额 -->
                <div v-if="table.order.length > 0" class="status-text">
                消费：€{{ listenedTableAmount(table).value }}
                </div>

                <!-- 编辑模式下显示删除按钮 -->
                <button v-if="editMode" class="delete-btn" @click.stop="removeTable(table.id)" title="删除桌子">
                    ×
                </button>
            </div>
        </div>

        <!-- 添加桌子 -->
        <div class="add-table-form" v-if="!editMode">
            <input v-model="newTableId" type="number" placeholder="桌号" />
            <input v-model.number="newMaxPeople" type="number" min="1" placeholder="最大人数" />
            <button @click="addTable">添加桌子</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>

        <!-- 弹窗：桌子详情 -->
        <div class="modal" v-if="selectedTable" @click="closeDetail">
            <div class="modal-content" @click.stop>

                <button class="close-btn" @click="closeDetail" aria-label="关闭弹窗">×</button>

                <h3>桌号 {{ editedTable.id }} </h3>

                <label>当前人数：</label>
                <input type="number" v-model.number="editedTable.people" :max="editedTable.maxPeople" min="1"
                    @input="peopleNumberFilter" 
                    :disabled="editedTable.status === '空闲' || !tableInfoEditable"
                    />

                <label>最大人数：</label>
                <input type="number" v-model.number="editedTable.maxPeople" min="1" @input="filterNumberInput"
                    :disabled="!tableInfoEditable" />

                <label>状态：</label>
                <select v-model="editedTable.status" :disabled="!tableInfoEditable">
                    <option value="空闲">空闲</option>
                    <option value="用餐中">用餐中</option>
                    <option value="已预订">已预订</option>
                    <option value="已支付">已支付</option>
                </select>

                <!-- QRCode -->
                <q-card-section class="flex flex-center">
                    <canvas ref="qrCanvas" style="margin-top: 8px;" />
                </q-card-section>

                <!-- 查看订单 -->
                <div class="text-right" style="margin-top: 12px;">
                <q-btn label="查看订单" color="secondary" @click="showOrderModal = true" />
                </div>

                <div class="modal-actions" style="display: flex; justify-content: space-between; margin-top: 16px;">
                    <!-- 始终渲染一键清理按钮，使用 visibility 控制是否显示 -->
                    <q-btn label="一键清理" color="negative" flat @click="clearTable" :style="(editedTable.people > 0 || editedTable.status !== '空闲')
                        ? 'visibility: visible;'
                        : 'visibility: hidden;'" />

                    <!-- 编辑状态下显示保存和取消 -->
                    <div v-if="tableInfoEditable" class="modal-actions"
                        style="display: flex; justify-content: space-between; margin-top: 16px;">
                        <q-btn label="保存" color="primary" @click="confirmEdit" class="q-mr-sm" />
                        <q-btn label="取消" color="grey" @click="cancelEdit" />
                    </div>
                    <!-- 编辑按钮只在非编辑状态显示 -->
                    <q-btn v-if="!tableInfoEditable" label="编辑" color="primary" @click="tableInfoEdit" />
                </div>

            </div>
        </div>

    <q-dialog v-model="showOrderModal">
    <q-card style="min-width: 400px;">
        <q-card-section>
        <div class="text-h6">桌号 {{ editedTable.id }} 的订单</div>
        </q-card-section>

        <q-card-section v-if="editedTable.order.length > 0">
        <q-list bordered>
            <q-item v-for="(item, index) in editedTable.order" :key="index">
            <q-item-section>{{ item.name }}</q-item-section>
            <q-item-section>数量: {{ item.quantity }}</q-item-section>
            <q-item-section>单价: €{{ item.price.toFixed(2) }}</q-item-section>
            </q-item>
        </q-list>
        </q-card-section>

        <q-card-section v-else>
        暂无订单。
        </q-card-section>

        <q-card-actions class="q-gutter-sm justify-between items-center">
        <!-- 左边：消费金额 -->
        <div v-if="editedTable.order.length > 0" class="text-subtitle2">
            消费：€{{ listenedTableAmount(editedTable).value }}
        </div>

        <!-- 右边：关闭按钮 -->
        <q-btn flat label="关闭" color="primary" v-close-popup />
        </q-card-actions>

    </q-card>
    </q-dialog>


    </div>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue'
import { useQuasar } from 'quasar'
import QRCode from 'qrcode'
import client from 'src/api/Client.js';

import '../styles/tablePage.css'

const $q = useQuasar()

const tables = ref(client.tables)

const qrCodeGenerated = ref(false)
const qrCanvas = ref(null)
const newTableId = ref('')
const newMaxPeople = ref(4)
const errorMessage = ref('')
const editMode = ref(false)  // 所有桌子编辑模式开关
const selectedTable = ref(null)           // 控制弹窗显示
const editedTable = ref(null)             // 编辑副本数据
const tableInfoEditable = ref(false)
const filterStatus = ref('全部')
const showOrderModal = ref(false)

const filteredTables = computed(() => {
  if (filterStatus.value === '全部') return tables.value
  return tables.value.filter(t => t.status === filterStatus.value)
})


function listenedTableAmount(table) {
  return computed(() => {
    return table.order.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0).toFixed(2)
  })
}

// 示例监听
watch(selectedTable, async (val) => {
    if (val) {
        // 打开弹窗后赋值副本
        editedTable.value = { ...val }

        // 空闲状态自动进入可编辑模式
        tableInfoEditable.value = val.status === '空闲'

        await nextTick()  // 等待DOM渲染
        generateQRCode()
    } else {
        qrCodeGenerated.value = false
        tableInfoEditable.value = false
    }
})


function closeDetail() {
  selectedTable.value = null
  editedTable.value = null
  tableInfoEditable.value = false
}

const generateQRCode = () => {
    if (!editedTable.value || !qrCanvas.value) return
    const data = window.global_qr_addr + editedTable.value.id
    console.log("QRCode data: ", data)
    QRCode.toCanvas(qrCanvas.value, data, { width: 150 }, (error) => {
        if (error) {
            console.error("二维码生成失败", error)
        } else {
            qrCodeGenerated.value = true
        }
    })
}
// TODO() filter tables
function tableInfoEdit() {
    tableInfoEditable.value = true
}

function peopleNumberFilter(e) {
    let val = e.target.value.replace(/[^\d]/g, '')
    if (val === '') {
        val = '0'
    }
    e.target.value = val
    editedTable.value.people = parseInt(val)
}

function filterNumberInput(e) {
    // 只保留数字
    let val = e.target.value.replace(/[^\d]/g, '')

    // 如果清空了或者为0，自动赋值为1
    if (val === '' || val === '0') {
        val = '1'
    }

    e.target.value = val
    editedTable.value.maxPeople = parseInt(val)
}

function clearTable() {

    tableInfoEditable.value = false

    if (!editedTable.value) return

    $q.dialog({
        title: '确认清理',
        message: `确认清理桌号 ${editedTable.value.id} 吗？这将清除当前人数并设为空闲。`,
        cancel: true,
        persistent: true
    }).onOk(() => {
        client.socket.emit('clean_table', selectedTable.value.id, (response) => {
            if (response.success) {
                tables.value = response.tables
                selectedTable.value = null
                editedTable.value = null
            } else {
                $q.dialog({ title: '错误', message: response.message })
            }
        })
    })
}


function addTable() {
    const id = parseInt(newTableId.value)
    const max = parseInt(newMaxPeople.value)

    if (isNaN(id) || isNaN(max) || max < 1) {
        errorMessage.value = '请输入有效的桌号和最大人数'
        return
    }

    client.socket.emit('add_table', {
        id,
        people: 0,
        maxPeople: max,
        status: '空闲'
    }, (response) => {
        if (response.success) {
            tables.value = response.tables
            newTableId.value = ''
            newMaxPeople.value = 4
            errorMessage.value = ''
        } else {
            errorMessage.value = response.message || '添加失败'
        }
    })
}

function removeTable(id) {
    $q.dialog({
        title: '确认删除',
        message: `确定要删除桌号 ${id} 吗？此操作不可恢复。`,
        cancel: true,
        persistent: true
    }).onOk(() => {
        client.socket.emit('remove_table', id, (response) => {
            if (response.success) {
                tables.value = response.tables
                if (selectedTable.value?.id === id) {
                    selectedTable.value = null
                    editedTable.value = null
                }
            } else {
                $q.dialog({ title: '错误', message: response.message })
            }
        })
    })
}

function cancelEdit() {
    tableInfoEditable.value = false
    selectedTable.value = null
    editedTable.value = null
}

function statusClass(status) {
  switch (status) {
    case '用餐中':
      return 'occupied'
    case '已预订':
      return 'reserved'
    case '已支付':
      return 'paid'
    case '空闲':
    default:
      return 'available'
  }
}

function selectTable(table) {
    selectedTable.value = table
    // 创建编辑副本，防止直接修改原始数据
    editedTable.value = { ...table }
}
function toggleEditMode() {
    editMode.value = !editMode.value
    // 退出编辑模式时关闭弹窗
    if (!editMode.value) {
        selectedTable.value = null
    }
}

function confirmEdit() {
    tableInfoEditable.value = false
    const edited = editedTable.value

    if (edited.people > edited.maxPeople) {
        $q.dialog({
            title: '人数错误',
            message: '当前人数不能超过最大人数。'
        })
        return
    }

    if (edited.status === '空闲') {
        edited.people = 0
    }

    client.socket.emit('update_table', edited, (response) => {
        if (response.success) {
            tables.value = response.tables
            selectedTable.value = null
            editedTable.value = null
        } else {
            $q.dialog({ title: '错误', message: response.message, ok: '明白了' })
        }
    })
}

</script>