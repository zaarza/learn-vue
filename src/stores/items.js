import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemsStore = defineStore('items', () => {
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

    return {
        items,
    };
});
