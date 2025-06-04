
<template>
    <div class="mb-4 p-1">

        <div class="flex flex-wrap gap-2 mt-3">
            <label for="stacked-buttons" class="font-bold block mb-2">Quantidade</label>
            <InputNumber v-model="count" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" mode="decimal" :min="0" :max="100" :step="10" fluid>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
            <label class="font-bold block mb-2">De que é que gosta?</label>
            <div class="p-d-flex p-flex-wrap">
                <Button
                    v-for="(item, index) in types"
                    :key="index"
                    @click="toggleSelection(item)"
                    :label="item.name"
                    class="m-1"
                    :class="{
                  'p-button-primary': isSelected(item),
                  'p-button-outlined': !isSelected(item)
                }"
                    raised
                />
            </div>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
            <label class="font-bold block mb-2">De que é que gosta?</label>
            <div class="p-d-flex p-flex-wrap">
                <Button
                    v-for="(item, index) in values"
                    :key="index"
                    @click="toggleSelection(item)"
                    :label="item.name"
                    class="m-1"
                    :class="{
                  'p-button-primary': isSelected(item),
                  'p-button-outlined': !isSelected(item)
                }"
                    raised
                />
            </div>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
            <Button
                icon="pi pi-shopping-cart"
                @click="addToCart()"
                label="Adicionar ao carrinho"
                class="m-3"
                severity="danger"
                raised
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

import data from './CustomDishData.js';
import cartItems from './CartItems.js';

import { useToast } from 'primevue/usetoast';
const toast = useToast();

const count = data.count;
const types = data.types;
const values = data.values;

function toggleSelection(item)
{
    item.selected = !item.selected;
}

function isSelected(item)
{
    return item.selected;
}

function addToCart()
{
    if (count.value <= 0)
    {
        toast.add({
            severity: 'warn', // 类型：success | info | warn | error
            summary: 'warn',
            detail: "A quantidade deve ser superior a 0",
            life: 3000 // 显示时长（毫秒）
        });
        return;
    }

    let note1 = "";
    let first = true;
    for (let i = 0; i <types.value.length ; i++) {
        if (types.value[i].selected)
        {
            if (first) {
                note1 += types.value[i].name;
                first = false;
            }
            else {
                note1 += ", " + types.value[i].name;
            }

        }
    }

    first = true;
    let note2 = "";
    for (let i = 0; i <values.value.length ; i++) {
        if (values.value[i].selected)
        {
            if (first) {
                note2 += values.value[i].name;
                first = false;
            }
            else {
                note2 += ", " + values.value[i].name;
            }

        }
    }

    cartItems.addItem({
        id: 0,
        count: count.value,
        notes: [note1,note2],
    })

    count.value = 0;
    for (let i = 0; i <types.value.length ; i++) {
        types.value[i].selected = false;
    }
    for (let i = 0; i <values.value.length ; i++) {
        values.value[i].selected = false;
    }



    toast.add({
        severity: 'info', // 类型：success | info | warn | error
        summary: 'info',
        detail: "Caixa Aleatória foi adicionada ao seu carrinho",
        life: 3000 // 显示时长（毫秒）
    });
}

</script>




