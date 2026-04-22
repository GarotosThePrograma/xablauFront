import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const itemExists = state.cart.find((item) => item.id === product.id);

        if (itemExists) {
            return {
                cart: state.cart.map((item) => 
                    item.id === product.id && item.quantity < item.stock
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
            }
        } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] }
        }
    }),

    decreaseQuantity: (productId) => set((state) => {
        const itemExists = state.cart.find((item) => item.id === productId);

        if (itemExists?.quantity === 1) {
            return { cart: state.cart.filter((item) => item.id !== productId) };
        } else {
            return {
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item  
                )
            }
        }
    }),

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId)
    }))
}));

// quando muda aparece no console
useCartStore.subscribe((state) => {
    console.log('A store mudou:', state.cart);
});
