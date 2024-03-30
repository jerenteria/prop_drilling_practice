import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    // will not get used, just helps with auto completion
    addItemToCart: () => {}, 
});

