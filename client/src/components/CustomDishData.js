import {ref} from "vue";

const count = ref(0);

const types = ref([
    {name: "Aleatória?🍣", selected: false},
    {name: "Salmão", selected: false},
    {name: "Atum", selected: false},
    {name: "Robalo", selected: false},
    {name: "Polvo", selected: false},
    {name: "Peixe Manteiga", selected: false},
    {name: "Gambas cozhido", selected: false},
    {name: "Enguia", selected: false},
]);

const values = ref([
    {name: "Aleatória?🍣", selected: false},
    {name: "Nigiri", selected: false},
    {name: "Maki", selected: false},
    {name: "Califórnia", selected: false},
    {name: "Temaki", selected: false},
    {name: "Gunkan", selected: false},
    {name: "Rolos", selected: false},
    {name: "Tostado", selected: false},
    {name: "Frito", selected: false},
    {name: "Vegetais", selected: false},
    {name: "+cebola frita", selected: false},
    {name: "+queijo", selected: false},
    {name: "+ovas", selected: false},
]);

export default {
    count,
    types,
    values
};


