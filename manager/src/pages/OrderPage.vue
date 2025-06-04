<template>
    <div class="q-pa-md">
        <q-table
            title="Orders"
            :rows="rows"
            :columns="columns"
            row-key='id'
            :filter="filter"
            @row-click="onRowClick"
        >
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </template>
        </q-table>
    </div>

    <q-dialog v-model="showDetail">
        <q-card bordered class="rounded-borders" style="min-width: 350px" >
            <q-card-section>
                <div class="text-h6">details</div>
            </q-card-section>

            <q-list bordered separator>
                <q-item v-for="(item, index) in selRow.dishes" :key="index" >
                    <q-item-section avatar>
                        {{getDishId(item)}}
                    </q-item-section>
                    <q-item-section>
                        {{getDishName(item)}}
                    </q-item-section>
                    <q-item-section side>
                        x {{item.quantity}}
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </q-dialog>
</template>

<script>

import { ref } from 'vue'
import client from 'src/api/Client.js';

const columns = [
    {
        name: 'id',
        required: true,
        label: 'id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'table',
        required: true,
        label: 'table',
        align: 'left',
        field: row => row.table,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'time',
        required: true,
        label: 'time',
        align: 'left',
        field: row => new Date(row.timestamp),
        format: val => `${val.toLocaleTimeString()}`,
        sortable: true
    },
];

const rows = client.orders;
const showDetail = ref(false);
const selRow = ref(null);

function onRowClick(evt, row) {
    selRow.value = row;
    showDetail.value = true;
}

function getDishName(item)
{
    for (let i = 0; i < client.menuData.length; i++) {
        const value = client.menuData[i];
        if (value.id == item.dishid) {
            return value.name;
        }
    }
    return "";

}

function getDishId(item)
{
   return item.dishid;
}


export default {
    setup () {
        return {
            getDishId,
            getDishName,
            onRowClick,
            showDetail,
            selRow,
            filter: ref(''),
            columns,
            rows
        }
    }
}

</script>
