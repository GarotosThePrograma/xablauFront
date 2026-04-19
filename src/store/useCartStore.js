import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({
        cart: [...state.cart, product], // pega tudo que já tinha no carrinho e adiciona o novo produto
    })),
}));

// quando muda aparece no console
useCartStore.subscribe((state) => {
    console.log('A store mudou:', state.cart);
});
