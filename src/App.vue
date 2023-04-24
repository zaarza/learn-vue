<script setup>
import Card from './components/Card.vue';
import { ref } from 'vue';

const items = ref([
    {
        id: 1,
        title: 'Pemrograman Dasar',
        subtitle: 'Semester 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam distinctio quisquam quod facere sint culpa! Vero fugit placeatrepellendus excepturi adipisci deleniti sint labore obcaecati sequi ad laboriosam nisi, debitis deserunt accusantium. Ullam nesciunt libero tempore fugit laboriosam! Voluptatum nihil, quas...',
    },
    {
        id: 2,
        title: 'Kalkulus',
        subtitle: 'Semester 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam distinctio quisquam quod facere sint culpa! Vero fugit placeatrepellendus excepturi adipisci deleniti sint labore obcaecati sequi ad laboriosam nisi, debitis deserunt accusantium. Ullam nesciunt libero tempore fugit laboriosam! Voluptatum nihil, quas...',
    },
]);

const favorites = ref([]);

const addItemToCart = (item) => {
    const indexItem = favorites.value
        .map((favorite) => favorite.id)
        .indexOf(item.id);

    if (indexItem > -1) {
        favorites.value[indexItem].quantity++;
    } else {
        favorites.value.push({
            id: item.id,
            title: item.title,
            quantity: 1,
        });
    }
};
</script>
<template>
    <div class="flex flex-wrap p-5 gap-3">
        <Card
            v-for="item in items"
            :item="item"
            @addItemToCart="addItemToCart"
        />
    </div>

    <div class="p-5 flex flex-col gap-y-3">
        <div class="flex flex-col">
            <h1 class="text-slate-50">Favorite</h1>
            <h2 class="text-slate-300">
                Favorite items will be listed here...
            </h2>
        </div>

        <ul class="flex flex-col gap-y-5">
            <li
                v-for="favorite in favorites"
                class="text-slate-50 max-w-xs flex justify-between items-center"
            >
                <span>{{ favorite.title }}</span>
                <span class="bg-sky-500 text-white text-sm p-2 rounded-md">{{
                    favorite.quantity
                }}</span>
            </li>
        </ul>
    </div>
</template>

<style>
body {
    background-color: rgb(15, 23, 42);
}
</style>
