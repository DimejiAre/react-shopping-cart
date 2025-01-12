import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import useLocalStorage from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => () => {
		const newItems = cart.filter(item => {
			return item.id !== id
		})
		setCart(newItems)
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart }}>
				<Navigation/>
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>
			
			<CartContext.Provider value={{ cart, removeItem }}>
				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext.Provider>
			
		</div>
	);
}

export default App;
