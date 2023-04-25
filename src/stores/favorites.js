import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
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
    return {
        favorites,
        addItemToCart,
    };
});
