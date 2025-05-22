
// ------------ 全局状态 ------------
let currentTable = null;
let currentPeople = null;
let selectedItems = {}; // 格式: { 菜品ID: 数量 }

// ------------ WebSocket 连接 ------------
const socket = io();

// ------------ 事件监听 ------------
socket.on('order_confirmed', handleOrderConfirmed);

function init() {
// 添加滑动控制（可选）
    let isDown = false;
    let startX;
    let scrollLeft;

    const tabs = document.querySelector('.tabs');

    tabs.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - tabs.offsetLeft;
        scrollLeft = tabs.scrollLeft;
    });

    tabs.addEventListener('mouseleave', () => {
        isDown = false;
    });

    tabs.addEventListener('mouseup', () => {
        isDown = false;
    });

    tabs.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabs.offsetLeft;
        const walk = (x - startX) * 2;
        tabs.scrollLeft = scrollLeft - walk;
    });
}



function clickType(tab)
{
    const category = tab.dataset.category;

    // 切换选项卡状态
    //document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    //tab.classList.add('active');

    showDish(category)
}

function  showDish(category)
{
    // 切换对应商品
    document.querySelectorAll('.dish-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });

    // 自动滚动到列表顶部
    document.querySelector('.dish-list').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showMenu() {
    const container = document.querySelector('.dish-list');
    if (!container) {
        console.error('错误: 找不到菜品容器');
        return;
    }

    var categorys = [];

    var items = datas.menu.map(function(element) {
        var dish = element;

        var found = false;
        for (let i = 0; i < categorys.length; i++) {
            if (categorys[i] == dish.category) found = true;
        }
        if (!found) categorys.push(dish.category);

        var icons =  "<div class=\"allergy-icons\">";
        //console.log(dish)
        for (let i = 0; i < dish.x.length; i++) {
            var n = dish.x[i];
            icons = icons + `
                <img src="./images/${n}.png" class="allergy-icon" alt="allergy"/>
                `;
        }

        icons = icons + "</div>";

        const dish_name = text(dish.name);
        let dish_desc = text(dish.note);

        return `
                <div class="dish-item" data-category="${dish.category}" data-dishid="${dish.id}">
                    <div>
                    <p>${dish.id}</p>
                    <img src="${dish.image}" class="dish-image" alt="dish"/>
                    </div>
                    <div class="dish-info">
                        <h3 class="dish-name">${dish_name}</h3>
                        <p class="dish-desc">${dish_desc}</p>
                        ${icons}
                    </div>
                    <div class="dish-actions">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">0</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                `});

    container.innerHTML = container.innerHTML + items.join("");

    console.log('已加载菜品数量:', datas.menu.length);

    const categoryContainer = document.querySelector('.tabs');
    const categoryStrings = categorys.map(function(element) {
        const name = text(element)
        return  `<label>
            <input type="radio" name="radio" data-category="${element}">
            <span class="tab-item">${name}</span>
        </label>`;
    });
    categoryContainer.innerHTML = categoryStrings.join("");

    // 选项卡交互
    document.querySelectorAll('.mydict input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function(e) {
            clickType(this);
        });
    });

    const radio = document.querySelector('.mydict input[type="radio"]');
    radio.checked = true;

    showDish(categorys[0]);
}

function setSuantityBtn()
{
    // 数量增减交互
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function () {

            if (!currentTable || !currentPeople) {
                alert('Por favor, defina primeiro as informações do jantar');
                return;
            }

            console.log(this.parentElement.parentElement)
            console.log(this.parentElement.parentElement.dataset)
            let dishid = this.parentElement.parentElement.dataset.dishid;
            const quantity = this.parentElement.querySelector('.quantity');
            let num = parseInt(quantity.textContent);

            if (this.classList.contains('plus')) {
                if (num < 9)  num++;
            } else if (num > 0) {
                num--;
            }

            quantity.textContent = num;

            selectedItems[dishid] = num;
            updateSelectionDisplay();
        });
    });
}

// 更新已选菜品显示
function updateSelectionDisplay() {
    const container = document.getElementById('selectedItems');
    const items = Object.entries(selectedItems)
        .filter(([_, qty]) => qty > 0)
        .map(([id, qty]) => `${id} ×${qty}`);

    container.innerHTML = items.length
        ? '<strong>' + text("Pratos selecionados:") + `</strong> ${items.join(', ')}`
        : '';
}

const FORM_KEY = 'submitLimit';
const MAX_SUBMIT = 3;
const LIMIT_TIME = 3 * 60 * 1000; // 10分钟（毫秒）

// ------------ 订单提交 ------------
function submitOrder() {
    if (!currentTable || !currentPeople) {
        alert(text('Por favor, defina primeiro as informações do jantar'));
        return;
    }


    // 获取存储记录
    const record = JSON.parse(localStorage.getItem(FORM_KEY) || '{}');
    const now = Date.now();

    // 首次提交或超过限制周期时重置
    if (!record.startTime || (now - record.startTime) > LIMIT_TIME) {
        record.startTime = now;
        record.count = 0;
    }

    // 检查提交次数
    if (record.count >= MAX_SUBMIT) {
        const remainTime = LIMIT_TIME - (now - record.startTime);
        showLimitTip(remainTime);
        return;
    }

    // 允许提交
    record.count++;
    localStorage.setItem(FORM_KEY, JSON.stringify(record));

    const items = Object.entries(selectedItems)
        .filter(([_, qty]) => qty > 0)
        .map(([dishid, qty]) => ({
            dishid: dishid,
            quantity: qty
        }));

    if (items.length === 0) {
        alert(text('Selecione pelo menos um prato'));
        return;
    }

    // 禁用提交按钮防止重复提交
    const submitBtn = document.getElementById('submitOrder');
    submitBtn.disabled = true;
    submitBtn.textContent = text('Enviando...');

    socket.emit('submit_order', {
        people: currentPeople,
        table: currentTable,
        items
    });
}

function handleOrderConfirmed(orderId) {
    showOrderAlert(orderId);

    // 重置界面状态
    const submitBtn = document.getElementById('submitOrder');
    submitBtn.disabled = false;
    submitBtn.textContent = text('submitOrder');

    document.querySelectorAll('.quantity').forEach(quantity => {
        quantity.textContent = '0';
    });
    selectedItems = {};
    updateSelectionDisplay();
}


function showInitTable()
{
    // 弹出窗口逻辑
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');
    const peopleInput = document.getElementById('people');
    const seatInput = document.getElementById('seat');
    const errorMessages = document.querySelectorAll('.error-message');

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideErrors() {
        errorMessages.forEach(msg => msg.style.display = 'none');
    }

    document.getElementById('confirmBtn').addEventListener('click', () => {
        hideErrors();

        const people = parseInt(peopleInput.value);
        const seat = seatInput.value.trim();

        let isValid = true;

        if (!people || people < 1) {
            showError(document.getElementById('peopleError'), text('peopleError'));
            isValid = false;
        }

        if (!seat) {
            showError(document.getElementById('seatError'), text('seatError'));
            isValid = false;
        }

        if (isValid) {
            // 保存到本地存储
            localStorage.setItem('diningInfo', JSON.stringify({
                people,
                seat,
                timestamp: Date.now(),
            }));

            // 隐藏弹出层
            overlay.style.display = 'none';
            // 显示主内容
            mainContent.style.display = 'block';

            currentPeople = people;
            currentTable = seat;
            disTableInfo();
        }
    });

    // 检查本地存储
    const savedInfo = localStorage.getItem('diningInfo');

    if (savedInfo) {
        console.log(savedInfo);
        const { people, seat, timestamp } = JSON.parse(savedInfo);
        console.log(people, seat, timestamp, Date.now() - timestamp);
        // 如果2小时内有效
        if (Date.now() - timestamp < 2 * 60 * 60 * 1000) {
            overlay.style.display = 'none';
            mainContent.style.display = 'block';

            currentPeople = people;
            currentTable = seat;

            disTableInfo();

            return;
        }
    }

    // 首次进入显示弹出层
    overlay.style.display = 'flex';
}

function showLimitTip(remainTime)
{
    const minutes = Math.ceil(remainTime / 60000);
    const hint = text('LimitTip1')  + minutes + text('LimitTip2');
    const title = text('LimitTitle')
    showTip(title,hint,true);
}

function showOrderAlert(orderId) {
    var title = text('Encomenda enviada com sucesso!');
    var hint = text('Número de encomenda:') + " " + orderId;
    showTip(title,hint);
}

function showTip(title,hint,showX= false)
{
    // 创建弹窗元素
    const alertBox = document.createElement('div');

    let btn = "";

    // 弹窗内容
    if (showX)
    {
        alertBox.className = 'order-alertx';
        alertBox.innerHTML = `
            <svg class="order-alertx-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div class="order-alertx-content">
              ${title} <br>
              <small>${hint}</small>
            </div>
            <div class="order-alertx-close">&times;</div>
          `;

        btn = '.order-alertx-close';
    }
    else
    {
        alertBox.className = 'order-alert';
        alertBox.innerHTML = `
            <svg class="order-alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="order-alert-content">
              ${title} <br>
              <small>${hint}</small>
            </div>
            <div class="order-alert-close">&times;</div>
          `;

        btn = '.order-alert-close';
    }


    // 添加关闭功能
    const closeBtn = alertBox.querySelector(btn);
    closeBtn.onclick = () => {
        alertBox.classList.add('hide');
        setTimeout(() => alertBox.remove(), 300);
    };

    // 自动关闭
    setTimeout(() => {
        alertBox.classList.add('hide');
        setTimeout(() => alertBox.remove(), 300);
    }, 5000);

    // 添加到页面
    document.body.appendChild(alertBox);
}

function disTableInfo()
{
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');

    const txt_number = text("txt_number");
    const txt_seat = text("txt_seat");
    const txt_editBtn = text("editBtn");

    const info = document.getElementById('infoBar');
    info.innerHTML =  `
    <div class="info-item">
        <span class="info-label" id="txt_number">${txt_number}</span>
        <span class="info-value" id="displayPeople">${currentTable}</span>
    </div>
    <div class="info-item">
        <span class="info-label" id="txt_seat">${txt_seat}</span>
        <span class="info-value" id="displaySeat">${currentPeople}</span>
    </div>
    <button class="edit-btn" id="editBtn">${txt_editBtn}</button>
    <div class="language-switcher">
        <select id="langSelect">
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
        </select>
    </div>
    `;

    document.getElementById('editBtn').addEventListener('click', () => {
        overlay.style.display = 'flex';
        mainContent.style.display = 'none';
    });

    document.getElementById('langSelect').value = currentLang;
    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('preferredLang', currentLang);
        console.log("save language:", currentLang);
        updateTexts();
    });
}

socket.on("menu_data", (menuData) => {
    datas.menu = menuData;

    showMenu();
    setSuantityBtn();

});

document.addEventListener('DOMContentLoaded', () => {
    initLanguage()
    init();
    showInitTable();
    console.log('系统初始化完成');
});

let currentLang = 'pt';
let lang_res = {}
// 初始化语言
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLang');
    console.log(savedLang);
    currentLang = savedLang || navigator.language.split('-')[0];
    if (!datas.texts[currentLang]) currentLang = 'pt';
    lang_res = datas.texts[currentLang];
    updateTexts();
}

// 更新所有文本
function updateTexts() {
    lang_res = datas.texts[currentLang];
    for (let key in lang_res) {
        const value = lang_res[key];
        //console.log(key, value);

        var e = document.getElementById(key);
        if (e) e.textContent = value;
    }

    document.querySelectorAll('.dish-item').forEach(item => {
        var dish_name = item.querySelector(".dish-name");
        var dish_desc = item.querySelector(".dish-desc");
        for (let i = 0; i < datas.menu.length; i++) {
            var data = datas.menu[i];
            //console.log(data, item.dataset);
            if (data.id == item.dataset.dishid)
            {
                dish_name.textContent = text(data.name);
                dish_desc.textContent = text(data.note);
            }
        }
    });

    document.querySelectorAll('.tab-item').forEach(tab => {
        var data_node = tab.parentElement.querySelector("input");
        tab.textContent = text(data_node.dataset.category);
    });
}

function text(value)
{
    if (value in lang_res)  return lang_res[value];
    return value;
}
