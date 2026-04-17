const CustomDish = require('../model/customDish')
const CustomDishTemplate = require('../model/customDishTemplate')
const CustomDishType = require('../model/customDishType')

const ids = {
    sushi_aleatoria: 1,
    pock_bowl: 2,
    nine_square: 3,
    bibimbap: 4,
    xiaoxiong_ramen: 5,
    xiaoxiong_menu_lunch: 6,
    hotpot: 7,
}

const mysteryBoxTypes = [
    new CustomDishType(1, "types", "鱼", "Fish", "Peixe", [
        new CustomDish(1, "Aleatória?🍣", "随机?🍣", "Random?🍣", "Aleatória?🍣"),
        new CustomDish(2, "Salmão", "三文鱼", "Salmon", "Salmão"),
        new CustomDish(3, "Atum", "金枪鱼", "Tuna", "Atum"),
        new CustomDish(4, "Robalo", "海鲈鱼", "Sea bass", "Robalo"),
        new CustomDish(5, "Polvo", "章鱼", "Octopus", "Polvo"),
        new CustomDish(6, "Peixe Manteiga", "鳕鱼", "Butterfish", "Peixe Manteiga"),
        new CustomDish(7, "Gambas cozido", "虾", "Shrimp", "Gambas cozido"),
        new CustomDish(8, "Enguia", "鳗鱼", "Eel", "Enguia")
    ], 5, 1),
    new CustomDishType(2, "values", "寿司", "Sushi", "Sushi", [
        new CustomDish(9, "Aleatória?🍣", "随机?🍣", "Random?🍣", "Aleatória?🍣"),
        new CustomDish(10, "Sashimi", "刺身", "Sashimi", "Sashimi"),
        new CustomDish(11, "Nigiri", "握寿司", "Nigiri", "Nigiri"),
        new CustomDish(12, "Maki", "寿司卷", "Maki", "Maki"),
        new CustomDish(13, "Califórnia", "加州卷", "California", "Califórnia"),
        new CustomDish(14, "Temaki", "手卷", "Temaki", "Temaki"),
        new CustomDish(15, "Gunkan", "军舰卷", "Gunkan", "Gunkan"),
        new CustomDish(16, "Rolos", "卷类", "Rolls", "Rolos"),
        new CustomDish(17, "Tostado", "炙烧", "Seared", "Tostado"),
        new CustomDish(18, "Frito", "炸的", "Fried", "Frito"),
        new CustomDish(19, "Vegetais", "蔬菜", "Vegetables", "Vegetais"),
        new CustomDish(20, "+cebola frita", "+炸洋葱", "+fried onion", "+cebola frita"),
        new CustomDish(21, "+queijo", "+奶酪", "+cheese", "+queijo"),
        new CustomDish(22, "+ovas", "+鱼子", "+roe", "+ovas")
    ], 5, 1),
]

const mysteryBoxDescriptions = [
    {
        title_zh: "什么是 Sushi Aleatória®？",
        title_en: "What is Sushi Aleatória?®",
        title_pt: "O que é Sushi Aleatória?®",
        descriptions: [{
            description_pt: "Uma experiência inovadora que transforma o tradicional! A Sushi Aleatória® é como um “sushi surpresa” — cada prato é único, preparado pelos nossos chefs com base nas suas preferências. Basta dizer o que gosta e deixe‑se surpreender! Uma verdadeira aventura gastronómica, como uma “blind box” de sabores do Japão — perfeita para quem adora explorar o inesperado!'",
            description_en: "An innovative experience that reinvents tradition! Sushi Aleatória® is like a “surprise sushi” — each plate is unique, crafted by our chefs according to your preferences. Just tell us what you like and let yourself be amazed! It’s a true gastronomic adventure, a “blind box” of Japanese flavours — perfect for those who love exploring the unexpected!'",
            description_zh: "一场颠覆传统的创新体验！Sushi Aleatória® 就像一份“惊喜寿司”——每一份都由主厨根据您的口味即兴创作，独一无二。只需告诉我们您的偏好，便可收获满满惊喜！这是一段日本风味的“盲盒”味觉之旅，最适合热爱探索未知的食客！",
        }],
        image: {
            src: "/images/sushiBox.jpg",
            enable: true
        }
    },
    {
        title_zh: "如何点一份 Sushi Aleatória?®",
        title_en: "How to order Sushi Aleatória?®",
        title_pt: "Como pedir Sushi Aleatória?®",
        descriptions: [{
            description_zh: "1. 使用【你喜欢什么？】选项来组合想要的寿司；",
            description_en: "1. Use the [What do you like?] option to build the sushi plate you want;",
            description_pt: "1. Utilize a opção [De que é que gosta?] para compor o prato de sushi que pretende;",
        },
        {
            description_zh: "2. 加入购物车；",
            description_en: "2. Add it to the cart;",
            description_pt: "2. Adicione ao carrinho;",
        },
        {
            description_zh: "3. 提交订单。",
            description_en: "3. Place your order.",
            description_pt: "3. Faça o pedido.",
        }]
    }
]

const mysteryBox = new CustomDishTemplate(ids.sushi_aleatoria, mysteryBoxTypes, "Sushi Aleatória®", 0, "Sushi Aleatória®", 0, 0, mysteryBoxDescriptions, {
    quantity: true,
    quantitySetp: 5,
    maxQuantity: 50,
    extraInfo: "De que é que gosta? ®"
})

const pokebowlTypes = [
    new CustomDishType(1, "base", "底部", "Base", "Base", [
        new CustomDish(1, "Arroz de Sushi", "寿司米饭", "Sushi Rice", "Arroz de Sushi"),
        new CustomDish(2, "Arroz Branco", "白米饭", "White Rice", "Arroz Branco"),
    ], 1, 1),
    new CustomDishType(2, "protein", "蛋白质", "Protein", "Proteína", [
        new CustomDish(10, "Salmão", "三文鱼", "Salmon", "Salmão"),
        new CustomDish(11, "Atum", "金枪鱼", "Tuna", "Atum"),
        new CustomDish(12, "Peixe Manteiga", "黄油鱼", "Butterfish", "Peixe Manteiga"),
        new CustomDish(13, "Robalo", "海鲈鱼", "Sea Bass", "Robalo"),
        new CustomDish(14, "Polvo", "章鱼", "Octopus", "Polvo"),
        new CustomDish(15, "Enguia", "鳗鱼", "Eel", "Enguia"),
        new CustomDish(16, "Cambas conzidas", "熟虾", "Cooked Shrimp", "Gambas cozidas"),
        new CustomDish(17, "Frango Grelhado", "烤鸡肉", "Grilled Chicken", "Frango Grelhado"),
        new CustomDish(18, "Delicias do mar", "海鲜杂锦", "Seafood Mix", "Delicias do mar"),
        new CustomDish(19, "Ovo cozido", "水煮蛋", "Boiled egg", "Ovo cozido")
    ], 3, 1),
    new CustomDishType(3, "vegetable", "素食", "Vegetable", "Vegetal", [
        new CustomDish(31, "Wakame", "裙带菜", "Wakame", "Wakame"),
        new CustomDish(32, "Cenoura", "胡萝卜", "Carrot", "Cenoura"),
        new CustomDish(33, "Abacate", "牛油果", "Avocado", "Abacate"),
        new CustomDish(34, "Courgette", "西葫芦", "Zucchini", "Courgette"),
        new CustomDish(35, "Tomate Cherry", "小番茄", "Cherry Tomato", "Tomate Cherry"),
        new CustomDish(36, "Couve", "羽衣甘蓝", "Kale", "Couve"),
        new CustomDish(37, "Ovas", "鱼籽", "Fish Roe", "Ovas"),
        new CustomDish(38, "Milho", "玉米", "Corn", "Milho"),
        new CustomDish(39, "Pepino", "黄瓜", "Cucumber", "Pepino"),
        new CustomDish(40, "Brócolos", "西兰花", "Broccoli", "Brócolos"),
        new CustomDish(41, "Manga", "芒果", "Mango", "Manga"),
        new CustomDish(42, "Sem Ingrediente", "不添加", "Without Ingredient", "Sem Ingrediente"),
    ], 4, 1),
    new CustomDishType(4, "incluited", "小料", "Included", "Incluidos", [
        new CustomDish(50, "Cebolinha", "细香葱", "Chives", "Cebolinha"),
        new CustomDish(51, "Coentro", "香菜", "Cilantro", "Coentro"),
        new CustomDish(52, "Cebola Frita", "炸洋葱", "Fried Onion", "Cebola Frita"),
        new CustomDish(53, "Sésamo", "芝麻", "Sesame", "Sésamo"),
    ], 2, 0),
    new CustomDishType(5, "sauce", "酱汁", "Sauce", "Molho", [
        new CustomDish(60, "Molho de mostarda caseira", "自制芥末酱", "Homemade Mustard Sauce", "Molho de mostarda caseira"),
        new CustomDish(61, "Molho Teriyaki", "照烧酱", "Teriyaki Sauce", "Molho Teriyaki"),
        new CustomDish(62, "Molho Sweet Chilli", "甜辣酱", "Sweet Chili Sauce", "Molho Sweet Chilli"),
        new CustomDish(63, "Sem Molho", "不要酱", "Without Sauce", "Sem Molho"),
    ], 1, 0),
]

const pokebowlDescription = [
    {
        title_zh: "什么是 Poke Bowl？",
        title_en: "What is Poke Bowl?",
        title_pt: "O que é Poke Bowl?",
        descriptions: [{
            description_pt: "O Poke Bowl é uma combinação fresca e saborosa da culinária havaiana com toques japoneses. Neste prato personalizado, você escolhe a sua base, seleciona ingredientes principais como salmão ou atum, adiciona acompanhamentos frescos, inclui coberturas especiais e finaliza com um molho delicioso. Ideal para quem procura uma refeição equilibrada, saudável e feita à sua medida!",
            description_en: "A Poke Bowl is a fresh, flavorful mix of Hawaiian cuisine with a Japanese twist. In this customizable dish, you pick your base, add main ingredients like salmon or tuna, choose fresh toppings, include special extras, and finish with a tasty sauce. Perfect for anyone looking for a healthy, balanced meal tailored to their taste!",
            description_zh: "Poke Bowl 是一道结合了夏威夷风味和日式元素的清新美食。你可以自定义选择 基础主食（如寿司饭）、添加主配料（如三文鱼或金枪鱼）、搭配新鲜蔬菜与配菜，加入额外点缀，最后浇上你喜欢的酱汁。既健康又美味，适合每一位追求个性化饮食的食客！",
        }],
        image: {
            src: "/images/pokeBowl.jpg",
            enable: true
        }
    },
    {
        title_zh: "如何自定义你的 Poke Bowl？",
        title_en: "How to order your Poke Bowl?",
        title_pt: "Como pedir o seu Poke Bowl?",
        descriptions: [{
            description_pt: "1. Escolha uma base — como arroz de sushi ou arroz branco;",
            description_en: "1. Choose a base — such as sushi rice or white rice;",
            description_zh: "1. 选择主食，如寿司饭或白米饭；",
        },
        {
            description_pt: "2. Adicione os ingredientes principais (Ingredientes 1);",
            description_en: "2. Add your main ingredients (Ingredients 1);",
            description_zh: "2. 添加主配料（配料 1）；",
        },
        {
            description_pt: "3. Selecione acompanhamentos e vegetais (Ingredientes 2);",
            description_en: "3. Select additional veggies and sides (Ingredients 2);",
            description_zh: "3. 选择附加配料和蔬菜（配料 2）；",
        },
        {
            description_pt: "4. Inclua coberturas extras como cebola frita ou sésamo;",
            description_en: "4. Include extras like fried onion or sesame seeds;",
            description_zh: "4. 加入额外点缀，如炸洋葱或芝麻；",
        },
        {
            description_pt: "5. Finalize com o molho da sua preferência;",
            description_en: "5. Top it off with your favorite sauce;",
            description_zh: "5. 淋上你喜欢的酱汁；",
        },
        {
            description_pt: "6. Adicione ao carrinho e faça o pedido.",
            description_en: "6. Add it to the cart and place your order.",
            description_zh: "6. 加入购物车并提交订单。",
        }],
    }
]

const pokebowl = new CustomDishTemplate(ids.pock_bowl, pokebowlTypes, "Poke Bowl", 0, "Poke Bowl", 0, 0, pokebowlDescription)

const ninesquareGridTypes = [
    new CustomDishType(1, "carne", "肉", "Meat", "Carne", [
        new CustomDish(1, "韩国传统牛肉", "🐂 韩国传统牛肉", "🐂 Korean Traditional Beef", "🐂 Carne Bovina Tradicional Coreana"),
        new CustomDish(2, "洋葱牛肉", "🧅 洋葱牛肉", "🧅 Beef with Onion", "🧅 Carne Bovina com Cebola"),
        new CustomDish(3, "牛五花", "🥩 牛五花", "🥩 Beef Brisket", "🥩 Peito Bovino"),
        new CustomDish(4, "黑猪肉", "🐗 黑猪肉", "🐗 Black Pork", "🐗 Porco Preto"),
        new CustomDish(5, "猪五花", "🥓 猪五花", "🥓 Pork Belly", "🥓 Barriga de Porco"),
        new CustomDish(6, "辣猪五花", "🌶️ 辣猪五花", "🌶️ Spicy Pork Belly", "🌶️ Barriga de Porco Picante"),
        new CustomDish(7, "羊肉", "🐑 羊肉", "🐑 Lamb", "🐑 Cordeiro"),
        new CustomDish(8, "鸡肉", "🐔 鸡肉", "🐔 Chicken", "🐔 Frango"),
        new CustomDish(9, "虾", "🦐 虾", "🦐 Shrimp", "🦐 Camarão"),
        new CustomDish(10, "辣虾", "🔥 辣虾", "🔥 Spicy Shrimp", "🔥 Camarão Picante"),
        new CustomDish(11, "小章鱼", "🐙 小章鱼", "🐙 Small Octopus", "🐙 Polvo Pequeno"),
        new CustomDish(12, "土豆", "🥔 土豆", "🥔 Potato", "🥔 Batata"),
        new CustomDish(13, "金针菇", "🍄 金针菇", "🍄 Enoki Mushroom", "🍄 Cogumelo Enoki"),
        new CustomDish(14, "红薯片", "🍠 红薯片", "🍠 Sweet Potato Slices", "🍠 Fatias de Batata Doce"),
    ], 14, 9),
]

const nineSquareGridDescription = [
    {
        title_zh: "打造专属您的九宫格！",
        title_en: "Create Your Exclusive Nine-Square Grid!",
        title_pt: "Crie Sua Grade Exclusiva de Nove Quadrados!",
        descriptions: [{
            description_pt: "Selecione seus ingredientes favoritos da nossa coleção premium e combine-os livremente em uma deliciosa matriz de grade de nove quadrados",
            description_en: "Select your favorite ingredients from our premium collection and freely combine them into a delicious nine-square grid matrix",
            description_zh: "从精选食材库中挑选心仪食材，自由组合拼成九宫格美味矩阵",
        }],
        image: {
            src: "",
            enable: true
        }
    },
]

const nineSquareGrid = new CustomDishTemplate(ids.nine_square, ninesquareGridTypes, "MY BOX", 32, "MY BOX", 0, 0, nineSquareGridDescription, { dishQuantity: 3 })

const xiaoxiaongRamenTypes = [
  // 1️⃣ 类型：风格 / Tipo / Style
  new CustomDishType(
    1,
    "tipo",
    "✅风格",
    "✅Style",
    "✅Estilo",
    [
      new CustomDish(46, "Ramen", "汤面", "Ramen", "Noodles com caldo"),
      new CustomDish(47, "Lo Mein", "拌面", "Lo mein", "Noodles sem caldo")
    ],
    1,
    1
  ),

  // 2️⃣ 类型：口味 / Sabor / Flavor
  new CustomDishType(
    2,
    "sabor",
    "😋口味",
    "😋Flavor",
    "😋Sabor",
    [
      new CustomDish(52, "Alho picado", "蒜蓉", "Chopped garlic", "Alho picado"),
      new CustomDish(14, "Molho de soja", "酱油", "Soy sauce", "Molho de soja"),
      new CustomDish(54, "Picante🌶️", "辣味 🌶️", "Spicy 🌶️", "Picante 🌶️"),
      new CustomDish(16, "Caril", "咖喱", "Curry", "Caril"),
      new CustomDish(56, "Vegetais", "蔬菜", "Vegetables", "Vegetais")
    ],
    1,
    1
  ),

  // 3️⃣ 类型：汤底 / Caldo / Broth
  new CustomDishType(
    3,
    "caldo",
    "🥣汤底",
    "🥣Broth",
    "🥣Caldo",
    [
      new CustomDish(11, "Tonkotsu", "豚骨", "Tonkotsu", "Tonkotsu"),
      new CustomDish(12, "Miso", "味噌", "Miso", "Miso"),
      new CustomDish(13, "Vegan", "素汤", "Vegan", "Vegan")
    ],
    1,
    0
  ),

  // 4️⃣ 类型：面条 / Massa / Noodles
  new CustomDishType(
    4,
    "massa",
    "🍜面条",
    "🍜Noodles",
    "🍜Massa",
    [
      new CustomDish(17, "Massa Fresca", "新鲜拉面", "Fresh noodles", "Massa fresca"),
      new CustomDish(19, "Massa de Arroz", "米粉", "Rice noodles", "Massa de arroz"),
      new CustomDish(49, "Noodles", "方便面", "Noodles", "Noodles"),
      new CustomDish(50, "Pho", "河粉", "Pho", "Pho"),
      new CustomDish(22, "Udon", "乌冬", "Udon", "Udon")
    ],
    1,
    1
  ),

  // 5️⃣ 类型：包含 / Incluído / Included
  new CustomDishType(
    5,
    "incluido",
    "🧂包含",
    "🧂Included",
    "🧂Incluído",
    [
      new CustomDish(61, "Resíduo de banha", "猪油渣", "Pork fat residue", "Resíduo de banha"),
      new CustomDish(29, "Coentros", "香菜", "Coriander", "Coentros"),
      new CustomDish(30, "Cebolinha", "葱花", "Spring onion", "Cebolinha")
    ],
    3,
    0
  ),

  // 6️⃣ 类型：额外 / Extra / Extra
  new CustomDishType(
    6,
    "extra",
    "🥢额外",
    "🥢Extra",
    "🥢Extra",
    [
      new CustomDish(33, "Char siu", "叉烧 +2.80€", "Char Siu +2.80€", "Char siu +2.80€", 2.8),
      new CustomDish(35, "Carne refogada🌶️", "辣炒肉末 🌶️ +3.50€", "Spicy minced pork 🌶️ +3.50€", "Carne refogada 🌶️ +3.50€", 3.5),
      new CustomDish(34, "Porco Dongpo", "东坡肉 +3.20€", "Dongpo pork +3.20€", "Porco Dongpo +3.20€", 3.2),
      new CustomDish(36, "Frango panado", "日式炸鸡排 +2.80€", "Katsu chicken +2.80€", "Frango panado +2.80€", 2.8),
      new CustomDish(43, "Pato frito", "香酥鸭 +3.80€", "Fried duck +3.80€", "Pato frito +3.80€", 3.8),
      new CustomDish(37, "Perna de pato", "鸭腿 +4.50€", "Duck leg +4.50€", "Perna de pato +4.50€", 4.5),
      new CustomDish(44, "Camarão alho picado", "蒜蓉虾 +3.80€", "Garlic shrimp +3.80€", "Camarão alho picado +3.80€", 3.8),
      new CustomDish(67, "Gambas Panadas", "炸虾 +3.50€", "Fried prawns +3.50€", "Gambas panadas +3.50€", 3.5),
      new CustomDish(38, "Tofu grelhado", "烤豆腐 +1.80€", "Grilled tofu +1.80€", "Tofu grelhado +1.80€", 1.8),
      new CustomDish(41, "Ovo semi-cozido", "溏心蛋 +1.20€", "Soft-boiled egg +1.20€", "Ovo semi-cozido +1.20€", 1.2)
    ],
    10,
    0
  )
];

const xiaoxiongRamenDescription = [
    {
        title_zh: "XIAOXIONG® 拉面点餐流程",
        title_en: "How XIAOXIONG® RAMEN Works",
        title_pt: "Como funciona o XIAOXIONG® RAMEN",
        descriptions: [
            {
                description_pt: "1. Escolha o tipo (Ramen ou Lo Mein)",
                description_en: "1. Choose the type (Ramen or Lo Mein)",
                description_zh: "1. 选择种类（汤面或拌面）",
            },
            {
                description_pt: "2. Escolha o sabor que deseja",
                description_en: "2. Select the flavor you want",
                description_zh: "2. 选择您喜欢的口味",
            },
            {
                description_pt: "3. Indique a base para o seu caldo",
                description_en: "3. Select the base for your broth",
                description_zh: "3. 选择汤底",
            },
            {
                description_pt: "4. Escolha um tipo de massa",
                description_en: "4. Choose a type of noodles",
                description_zh: "4. 选择面条类型",
            },
            {
                description_pt: "5. Selecione os acompanhamentos incluídos",
                description_en: "5. Pick your basic toppings (Included)",
                description_zh: "5. 勾选基本配料（已包含）",
            },
            {
                description_pt: "6. Descubra as opções adicionais",
                description_en: "6. Discover our additional options",
                description_zh: "6. 选择额外加点内容",
            }
        ],
        image: {
            src: "/images/xiaoxiong_ramen.jpg",
            enable: true
        }
    }
]

const xiaoxiongRamen = new CustomDishTemplate(ids.xiaoxiong_ramen, xiaoxiaongRamenTypes, "XIAOXIONG® RAMEN", 6.90, "XIAOXIONG® RAMEN", 0, 0, xiaoxiongRamenDescription, {
    included_extra_information_en: "By default, the following are already included: Bamboo, Chinese black fungus, Bean sprouts, Pakchoi cabbage",
    included_extra_information_zh: "默认包含：竹笋、中国黑木耳、豆芽、白菜（小白菜）",
    included_extra_information_pt: "Por padrão já está incluído: Bambu, Fungo preto Chinês, Brotos de soja, Couve Pakchoi",
    fandaysDate: [11, 12, 25, 26],
    fandaysPrice: 2.9
})

const xiaoxiongLunchTypes = [
  new CustomDishType(1, "entrada", "🥟前菜", "🥟Entry", "🥟Entrada", [
    new CustomDish(1424, "Chūn Juǎn", "春卷", "Spring roll", "Chūn Juǎn"),
    new CustomDish(2053, "Wonton Frito", "炸馄饨", "Fried wonton", "Wonton Frito"),
    new CustomDish(2026, "Frango Panado", "炸鸡排", "Fried chicken cutlet", "Frango Panado"),
    // new CustomDish(4, "Camarão Panado", "面包虾", "Breaded Shrimp", "Camarão Panado")
  ], 1, 1),

  new CustomDishType(2, "prato", "🥗主菜", "🥗Main Dish", "🥗Prato", [
    new CustomDish(1452, "Mapo Tofu", "麻婆豆腐", "Mapo tofu", "Mapo Tofu"),
    new CustomDish(1453, "Lombo Agridoce", "糖醋里脊", "Sweet and sour Pork", "Lombo Agridoce"),
    new CustomDish(1454, "Carne de Porco Agridoce", "古老肉", "Sweet and Sour Pork (Canton)", "Carne de Porco Agridoce"),
    new CustomDish(1451, "Frango Kung Pao", "宫保鸡丁", "Kung Pao chicken", "Frango Kung Pao"),
    new CustomDish(1450, "Frango General Tso", "左宗棠鸡", "General Tso's Chicken", "Frango General Tso"),
    new CustomDish(1418, "Sizzler Frango Teriyaki", "铁板鸡 +1€", "Sizzling Chicken Platter +1€", "Frango Teriyaki +1€", 1),
    new CustomDish(1417, "Sizzler carne de vaca com molho de ostra", "铁板牛肉 +1€", "Sizzling Beef Platter +1€", "Carne de vaca +1€", 1),
    new CustomDish(1416, "Sizzler Camarão com alho", "铁板虾 +2€", "Sizzling Shrimp Platter +2€", "Camarão com alho +2€", 2)
  ], 1, 1),

  new CustomDishType(3, "massa_arroz", "🍚面饭类", "🍚Noodles & Rice", "🍚Massa & Arroz", [
    new CustomDish(1427, "Arroz XIAOXIONG®", "XIAOXIONG®米饭", "Rice XIAOXIONG®", "Arroz XIAOXIONG®"),
    new CustomDish(41, "Arroz Salteado", "炒饭", "Shrimp fried rice", "Arroz Salteado"),
    new CustomDish(2006, "Chow Mein Massa Fresca(Vegetariano)", "素炒新鲜面条", "Stir-fried fresh noodles(Vegetarian)", "Massa Fresca"),
    new CustomDish(2018, "Chow Mein Massa de Arroz(Vegetariano)", "素炒米粉", "Stir-fried rice noodles(Vegetarian)", "Massa de Arroz"),
    new CustomDish(2035, "Chow Mein Noodle Rolls(Vegetariano)", "素炒面卷", "Stir-fried noodles rolls(Vegetarian)", "Noodle Rolls"),
    new CustomDish(2022, "Chow Mein Massa Udon(Vegetariano)", "素炒乌冬面", "Stir-fried udon noodles(Vegetarian)", "Massa Udon"),
    new CustomDish(2030, "Chow Mein Massa Pho(Vegetariano)", "素炒河粉", "Stir-fried pho noodles(Vegetarian)", "Massa Pho")
  ],1, 1),
  new CustomDishType(4, "upgrade", "🦐炒面配料", "🦐Ingredients", "🦐Ingredientes", [
    new CustomDish(60, "Três Delícias", "地三鲜 +2.80€", "3 Delights +2.80€", "Três Delícias +3.00€", 3),
    new CustomDish(61, "Frango Panado", "炸鸡排 +3.00€", "Fried chicken cutlet +3.00€", "Frango Panado +1.00€", 1),
    new CustomDish(62, "Carne de Vaca", "牛肉 +3.50€", "Beef +3.50€", "Carne de Vaca +2.00€", 2)
  ], 1, 0)
]

const xiaoxiongLunchMenuDescription = [
    {
        title_zh: "搭配您的午间套餐",
        title_en: "Create Your Combo",
        title_pt: "Crie Seu Combo",
        descriptions: [{
            description_pt: "1. Select your appetizer",
            description_en: "1. Selecione seu aperitivo",
            description_zh: "1. 选择前餐",
        },
        {
            description_pt: "2. Escolha seu prato principal",
            description_en: "2. Choose your main dish",
            description_zh: "2. 选择主菜",
        },
        {
            description_pt: "3. Escolha um acompanhamento",
            description_en: "3. Pick a staple food",
            description_zh: "3. 选择主食",
        },
        {
            description_pt: "4. Opcional: Melhore seus noodles com ingredientes premium",
            description_en: "4. Optional: Upgrade your noodles with premium toppings",
            description_zh: "4. 可选：为面条添加升级配料",
        },
        {
            description_pt: "5. Adicionar ao Carrinho",
            description_en: "5. Add to Cart",
            description_zh: "5. 加入购物车",
        }],
        image: {
            src: "/images/menu_almoco.jpg",
            enable: true
        }
    }
]

const xiaoxiongLunch = new CustomDishTemplate(ids.xiaoxiong_menu_lunch, xiaoxiongLunchTypes, "Menu Almoço", 9.90, "Menu Almoço", 0, 0, xiaoxiongLunchMenuDescription,{
    menuLunchBeginTime: 11,
    menuLunchEndtTime: 16,
    menuLunchDays: [1,2,3,4,5], //0-星期日，1-星期一，...，5-星期五，6-星期六
})

const xiaoxiongHotpotTypes = [
    new CustomDishType(1, "Menu", "🍱套餐", "🍱Menu", "🍱Menu", [
        new CustomDish(3000, "Small", "小份", "Small", "Pequeno"),
        new CustomDish(3001, "Medium", "中份", "Medium", "Medio",3),
        new CustomDish(3002, "Large", "大份", "Large", "Grande",6),
        new CustomDish(3003, "Unlimited", "无限量", "Unlimited", "Ilimitado",9)
    ], 1, 1),

    new CustomDishType(2, "Broth", "🍲汤底", "🍲Broth", "🍲Caldo", [
        new CustomDish(1437, "Spicy Soup", "红汤", "Spicy Soup", "Panela Picante"),
        new CustomDish(1438, "Tomato Soup", "番茄", "Tomato Soup", "Panela Tomate"),
        new CustomDish(1439, "Pork Bone Soup", "筒骨", "Pork Bone Soup", "Panela Osso de porco")
    ]),

    new CustomDishType(3, "meat", "🥩肉类", "🥩Meat", "🥩Carne", [
        new CustomDish(312, "Duck Blood", "鸭血", "Duck Blood", "Sangue de Pato"),
        new CustomDish(313, "Sliced Lamb", "羊肉卷", "Sliced Lamb", "Fatias de Cordeiro"),
        new CustomDish(314, "Beef Tongue", "牛舌", "Beef Tongue", "Lingua de Novilho"),
        new CustomDish(316, "Sliced Beef", "肥牛卷", "Sliced Beef", "Fatias de Novilho"),
        new CustomDish(318, "Handmade Beef Balls", "手工牛肉丸", "Handmade Beef Balls", "Almodegas de Novilho"),
        new CustomDish(319, "Pork Belly", "五花肉", "Pork Belly", "Fatias de entremeada"),
        new CustomDish(320, "Luncheon Meat", "午餐肉", "Luncheon Meat", "Carne de Fiambre"),
        new CustomDish(321, "Shrimp Paste", "虾滑", "Shrimp Paste", "Almodegas de Gambas"),
        new CustomDish(322, "Crab Sticks", "蟹肉棒", "Crab Sticks", "Deliciais do Mar"),
        new CustomDish(323, "Assorted Meatballs", "丸子拼盘", "Assorted Meatballs", "Surtido de Almodegas"),
        new CustomDish(324, "Fish Tofu", "鱼豆腐", "Fish Tofu", "Tofu de Pescado")
    ]),

    new CustomDishType(4, "vegetables", "🥬蔬菜", "🥬Vegetables", "🥬Legumes", [
        new CustomDish(325, "Coriander", "香菜", "Coriander", "Coentro"),
        new CustomDish(326, "Corn", "玉米", "Corn", "Milho"),
        new CustomDish(327, "Chinese Cabbage", "大白菜", "Chinese Cabbage", "Couve Chinesa"),
        new CustomDish(328, "Lettuce", "生菜", "Lettuce", "Alface"),
        new CustomDish(329, "Dried Tribute Vegetable", "贡菜", "Dried Tribute Vegetable", "Alga Gong Cai"),
        new CustomDish(330, "Soybean Sprouts", "黄豆芽", "Soybean Sprouts", "Rebentos Soja"),
        new CustomDish(331, "White Radish", "白萝卜", "White Radish", "Nabo"),
        new CustomDish(332, "Kelp Knot", "海带结", "Kelp Knot", "Alga con No"),
        new CustomDish(333, "Winter Melon", "冬瓜", "Winter Melon", "Verdura Dong Gua"),
        new CustomDish(334, "Lotus Root", "藕片", "Lotus Root", "Rais de Lotus"),
        new CustomDish(335, "Potato Slices", "土豆片", "Potato Slices", "Batata"),
        new CustomDish(336, "Wood Ear Mushroom", "木耳", "Wood Ear Mushroom", "Orelhas de Judas"),
        new CustomDish(337, "Spinach", "菠菜", "Spinach", "Espinafre"),
        new CustomDish(338, "Crown Daisy", "茼蒿", "Crown Daisy", "Tong Hao"),
        new CustomDish(339, "Tofu Puffs", "豆腐泡", "Tofu Puffs", "Tofu Frito"),
        new CustomDish(341, "Tofu Skin", "豆腐皮", "Tofu Skin", "Pedaço de Tofu"),
        new CustomDish(342, "Fried Dough Sticks", "老油条", "Fried Dough Sticks", "Fartura Chinesa"),
        new CustomDish(343, "Quail Eggs", "鹌鹑蛋", "Quail Eggs", "Ovo Codorniz"),
        new CustomDish(344, "White Beech Mushroom", "白玉菇", "White Beech Mushroom", "Cogumelo Branco"),
        new CustomDish(345, "King Oyster Mushroom", "鸡腿菇", "King Oyster Mushroom", "Cogumelo de Boletus"),
        new CustomDish(346, "Enoki Mushroom", "金针菇", "Enoki Mushroom", "Cogumelo de Enoki"),
        new CustomDish(347, "Dried Tofu Skin", "腐竹", "Dried Tofu Skin", "Tofu Seco")
    ]),

    new CustomDishType(5, "staple", "🍜主食", "🍜Staple", "🍜Principais", [
        new CustomDish(348, "Sweet Potato Vermicelli", "红薯粉丝", "Sweet Potato Vermicelli", "Macarroes de Batata Doce"),
        new CustomDish(349, "Rice Cakes", "韩国年糕", "Rice Cakes", "Pasta de arroz"),
        new CustomDish(351, "Dumplings", "饺子", "Dumplings", "Gyoza"),
        new CustomDish(352, "Instant Noodles", "方便面", "Instant Noodles", "Ramen"),
        new CustomDish(353, "Udon Noodles", "乌冬面", "Udon Noodles", "Massa de Udon")
    ], 1, 5)
]

const xiaoxiongHotpotDescription = [
    {
        title_zh: "开启您的火锅之旅",
        title_en: "Start Your Hotpot Experience",
        title_pt: "Comece Sua Experiência de Hotpot",
        descriptions: [{
            description_pt: "1. Escolha o seu tipo de menu",
            description_en: "1. Select your menu type",
            description_zh: "1. 选择您的套餐类型",
        },
            {
                description_pt: "2. Selecione a base da sua sopa",
                description_en: "2. Select your soup base",
                description_zh: "2. 选择您的汤底",
            },
            {
                description_pt: "3. Escolha os seus ingredientes de hotpot",
                description_en: "3. Choose your hotpot ingredients",
                description_zh: "3. 选择火锅食材",
            },
            {
                description_pt: "4. Adicione ingredientes extras conforme necessário",
                description_en: "4. Add extra ingredients as needed",
                description_zh: "4. 根据需求添加额外食材",
            },
            {
                description_pt: "5. Adicionar ao Carrinho",
                description_en: "5. Add to Cart",
                description_zh: "5. 加入购物车",
            }],
        image: {
            src: "/images/menu_hotpot.jpg",
            enable: true
        }
    }
]

const xiaoxiongHotpot = new CustomDishTemplate(7, xiaoxiongHotpotTypes, "Xiaoxiong Hotpot", 9.90, 9.90, "Xiaoxiong Hotpot", 0, 0, xiaoxiongHotpotDescription,{
    limit:{
        small:6,
        mediun:9,
        large:12
    },
})


const values = [mysteryBox, pokebowl, nineSquareGrid, xiaoxiongRamen, xiaoxiongLunch, xiaoxiongHotpot]

module.exports = {
    ids,
    mysteryBox,
    pokebowl,
    nineSquareGrid,
    values
}