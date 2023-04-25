<script setup>
import { useFavoritesStore } from '../stores/favorites';

const props = defineProps(['item']);
// const emit = defineEmits(['addItemToCart']);

// const addItemToCart = () => {
//     emit('addItemToCart', props.item);
// };

const { addItemToCart } = useFavoritesStore();
</script>
<template>
    <div
        class="max-w-[450px] bg-slate-800 p-5 rounded-md flex flex-col gap-y-3"
    >
        <div class="flex flex-col">
            <h1 class="text-2xl text-slate-50">{{ props.item.title }}</h1>
            <h2 class="text-md text-slate-400">{{ props.item.subtitle }}</h2>
        </div>

        <div>
            <p class="text-sm text-slate-100 max-h-[200px]">
                {{ props.item.description }}
            </p>
        </div>

        <button
            @click="addItemToCart(props.item)"
            class="px-5 text-sm py-2 rounded-md bg-sky-500 text-white w-fit active:scale-105"
        >
            Add to cart
        </button>
    </div>
</template>
