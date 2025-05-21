

const datas = {
    menu: [
        { id: 1, name: "牛排1", note: "精选鸡腿肉配特制辣酱，口感鲜美多汁", category:"recommend", x: [1,2,3,4], image: "https://cdn.shopify.com/s/files/1/0669/8552/5527/files/sushi-pecas-take-away-delivery-destaque-kabuki-sushi-peixe-fresco-caldas-rainha-leiria-nazare.jpg?v=1741993270" },
        { id: 2, name: "牛排2", note: "精选鸡腿肉配特制辣酱，口感鲜美多汁", category:"combo", x: [1,2,3,4], image: "https://cdn.shopify.com/s/files/1/0669/8552/5527/files/sushi-pecas-take-away-delivery-destaque-kabuki-sushi-peixe-fresco-caldas-rainha-leiria-nazare.jpg?v=1741993270" },
        { id: 3, name: "牛排3", note: "精选鸡腿肉配特制辣酱，口感鲜美多汁", category:"snack", x: [1,2,3,4], image: "https://cdn.shopify.com/s/files/1/0669/8552/5527/files/sushi-pecas-take-away-delivery-destaque-kabuki-sushi-peixe-fresco-caldas-rainha-leiria-nazare.jpg?v=1741993270" },
        { id: 4, name: "酒", note: "精选鸡腿肉配特制辣酱，口感鲜美多汁", category:"drink", x: [1,2,3,4], image: "https://cdn.shopify.com/s/files/1/0669/8552/5527/files/sushi-pecas-take-away-delivery-destaque-kabuki-sushi-peixe-fresco-caldas-rainha-leiria-nazare.jpg?v=1741993270" },
        { id: 5, name: "水", note: "精选鸡腿肉配特制辣酱，口感鲜美多汁", category:"drink", x: [1,2,3,4], image: "https://cdn.shopify.com/s/files/1/0669/8552/5527/files/sushi-pecas-take-away-delivery-destaque-kabuki-sushi-peixe-fresco-caldas-rainha-leiria-nazare.jpg?v=1741993270" },

    ],
    orders: new Map(), // key: orderId
    keys: [
        "AIPO",
        "AMENDOIM",
        "CRUSTÁCEOS",
        "DIÓXIDO DE ENXOFRE E SULFITOS",
        "GLÚTEN",
        "LACTICÍNIOS",
        "LUPINS",
        "MOLUSCOS",
        "MOSTRADA",
        "NOZES",
        "OVO",
        "PEIXA",
        "SOJA",
        "SÉSAMO",
    ],
    keyimageids: [7,9,2,12,1,5,16,14,10,6,3,8,13,11],
    texts: {
        pt: {
            "txt_number": "Número:",
            "txt_seat": "Assento:",
            "Encomenda enviada com sucesso!": "Encomenda enviada com sucesso!",
            "Número de encomenda:": "Número de encomenda:",
            "text_number_of_people": "Número de pessoas a jantar:",
            "peopleError": "Por favor, insira o número de pessoas que irão janta",
            "input_lable_seat": "Número do assento:",
            "seatError": "Por favor, introduza o número do seu assento:",
            "confirmBtn": "Confirme o seu assento:",
            "editBtn": "Rever",
            'Por favor, defina primeiro as informações do jantar': 'Por favor, defina primeiro as informações do jantar',
            'Selecione pelo menos um prato': 'Selecione pelo menos um prato',
            "submitOrder": "Enviar pedido",
            "LimitTitle": "Dicas gentis",
            "LimitTip1": "Operou com muita frequência. Tente novamente passados ",
            "LimitTip2": " minutos.",
            "Pratos selecionados:": "Pratos selecionados:",

            "Nigiri": "Nigiri",

            "test": "test",
            "test_des": "123",
        },
        en: {
            "txt_number": "Number:",
            "txt_seat": "Seat:",
            "Encomenda enviada com sucesso!": "Order submitted successfully!",
            "Número de encomenda:": "Order Number:",
            "text_number_of_people": "Number of people dining:",
            "peopleError": "Please enter the number of people",
            "input_lable_seat": "Seat number:",
            "seatError": "Please enter your seat number",
            "confirmBtn": "Confirm Seat",
            "editBtn": "Edit",
            'Por favor, defina primeiro as informações do jantar': 'Please set dining information first',
            'Selecione pelo menos um prato': 'Select at least one dish',
            "submitOrder": "Submit Order",
            "LimitTitle": "Kind tips",
            "LimitTip1": "You have operated too frequently. Please try again after ",
            "LimitTip2": " minutes.",
            "Pratos selecionados:": "Pratos selecionados:",

            "Nigiri": "Nigiri",

            "test": "test",
            "test_des": "test_des",
        },
        zh: {
            "txt_number": "编号：",
            "txt_seat": "座位：",
            "Encomenda enviada com sucesso!": "订单提交成功！",
            "Número de encomenda:": "订单编号：",
            "text_number_of_people": "用餐人数：",
            "peopleError": "请输入用餐人数",
            "input_lable_seat": "座位号：",
            "seatError": "请输入座位号",
            "confirmBtn": "确认座位",
            "editBtn": "修改",
            'Por favor, defina primeiro as informações do jantar': '请先设置用餐信息',
            'Selecione pelo menos um prato': '请至少选择一道菜品',
            "submitOrder": "提交订单",
            "LimitTitle": "温馨提示",
            "LimitTip1": "你操作过于频繁，请",
            "LimitTip2": "分钟后再尝试。",
            "Pratos selecionados:": "已选商品:",

            "Nigiri": "手握",

            "test": "测试",
            "test_des": "测试123",

        },

    }


};