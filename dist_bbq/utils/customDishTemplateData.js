const CustomDish = require('../model/customDish')
const CustomDishTemplate = require('../model/customDishTemplate')
const CustomDishType = require('../model/customDishType')


const mysteryBoxTypes = [
    new CustomDishType(1, "types", [
        new CustomDish(1, "Aleatória?🍣"),
        new CustomDish(2, "Salmão"),
        new CustomDish(3, "Atum"),
        new CustomDish(4, "Robalo"),
        new CustomDish(5, "Polvo"),
        new CustomDish(6, "Peixe Manteiga"),
        new CustomDish(7, "Gambas cozido"),
        new CustomDish(8, "Enguia")
    ], 5, 1),
    new CustomDishType(2, "values", [
        new CustomDish(9, "Aleatória?🍣"),
        new CustomDish(10, "Sashimi"),
        new CustomDish(11, "Nigiri"),
        new CustomDish(12, "Maki"),
        new CustomDish(13, "Califórnia"),
        new CustomDish(14, "Temaki"),
        new CustomDish(15, "Gunkan"),
        new CustomDish(16, "Rolos"),
        new CustomDish(17, "Tostado"),
        new CustomDish(18, "Frito"),
        new CustomDish(19, "Vegetais"),
        new CustomDish(20, "+cebola frita"),
        new CustomDish(21, "+queijo"),
        new CustomDish(22, "+ovas")
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
            src: "",
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

const mysteryBox = new CustomDishTemplate(1, mysteryBoxTypes, "Sushi Aleatória®", 0, "Sushi Aleatória®", 0, 0, mysteryBoxDescriptions, { quantity: true, quantitySetp: 5, maxQuantity: 50 })

const bibiumbapTypes = [
    new CustomDishType(1, "base", [
        new CustomDish(1, "Arroz de Sushi"),
        new CustomDish(2, "Arroz Branco"),
    ], 1, 1),
    new CustomDishType(2, "protein", [
        new CustomDish(10, "Salmão"),
        new CustomDish(11, "Atum"),
        new CustomDish(12, "Peixe Manteiga"),
        new CustomDish(13, "Robalo"),
        new CustomDish(14, "Polvo"),
        new CustomDish(15, "Enguia"),
        new CustomDish(16, "Cambas conzidas"),
        new CustomDish(17, "Frango Grelhado"),
        new CustomDish(18, "Delicias do mar"),
        new CustomDish(19, "Ovo cozido")
    ], 3, 1),
    new CustomDishType(3, "vegetable", [
        new CustomDish(30, "Cenoura"),
        new CustomDish(31, "Wakame"),
        new CustomDish(32, "Cenoura"),
        new CustomDish(33, "Abacate"),
        new CustomDish(34, "Courgette"),
        new CustomDish(35, "Tomate Cherry"),
        new CustomDish(36, "Couve"),
        new CustomDish(37, "Ovas"),
        new CustomDish(38, "Milho"),
        new CustomDish(39, "Pepino"),
        new CustomDish(40, "Brócolos"),
        new CustomDish(41, "Manga"),
        new CustomDish(41, "Sem Ingrediente"),
    ], 4, 1),
    new CustomDishType(4, "incluited", [
        new CustomDish(50, "Cebolinha"),
        new CustomDish(51, "Coentro"),
        new CustomDish(52, "Cebola Frita"),
        new CustomDish(53, "Sésamo"),
    ], 2, 0),
    new CustomDishType(5, "sauce", [
        new CustomDish(60, "Molho de mostarda caseira"),
        new CustomDish(61, "Molho Teriyaki"),
        new CustomDish(62, "Molho Sweet Chilli"),
        new CustomDish(63, "Sem Molho"),
    ], 1, 0),
]

const bibiumbapDescription = [
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
            src: "",
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

const bibiumbap = new CustomDishTemplate(2, bibiumbapTypes, "Bibimbap", 0, "Bibimbap", 0, 0, bibiumbapDescription)

const ninesquareGridTypes = [
    new CustomDishType(1, "carne", [
        new CustomDish(1, "韩国传统牛肉"),
        new CustomDish(2, "洋葱牛肉"),
        new CustomDish(3, "牛五花"),
        new CustomDish(4, "黑猪肉"),
        new CustomDish(5, "猪五花"),
        new CustomDish(6, "辣猪五花"),
        new CustomDish(7, "羊肉"),
        new CustomDish(8, "鸡肉"),
        new CustomDish(9, "虾"),
        new CustomDish(10, "辣虾"),
        new CustomDish(11, "小章鱼"),
        new CustomDish(12, "土豆"),
        new CustomDish(13, "金针菇"),
        new CustomDish(14, "红薯片"),
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

const nineSquareGrid = new CustomDishTemplate(3, ninesquareGridTypes, "MY BOX", 32, "MY BOX", 0, 0, nineSquareGridDescription, {dishQuantity: 3})

const values = [mysteryBox, bibiumbap, nineSquareGrid]

module.exports = {
    mysteryBox,
    bibiumbap,
    nineSquareGrid,
    values
}