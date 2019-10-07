import { useState } from 'react';

const useLocalStorage = (initialValue) => {
    const [cart, setCart] = useState(() => {
        const item = localStorage.getItem('cart');
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = value => {
        localStorage.setItem('cart', JSON.stringify(value));
        setCart(value);
    }

    return [cart, setValue];

}

export default useLocalStorage;