import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
	Products,
	Navbar,
	Cart,
	Checkout,
	Home,
	CategoryProducts,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [cart, setCart] = useState({});
	const [order, setOrder] = useState({});
	const [errorMessage, setErrorMessage] = useState("");

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	const fetchCategories = async () => {
		const { data } = await commerce.categories.list();
		setCategories(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });
		setCart(cart);
	};

	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};

	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	};

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder
			);
			setOrder(incomingOrder);
			refreshCart();
		} catch (error) {
			setErrorMessage(error.data.error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
		fetchCategories();
		fetchCart();
	}, []);

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	return (
		<Router>
			<div>
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path="/">
						<Home categories={categories} />
					</Route>
					<Route exact path="/products">
						<Products
							products={products}
							onAddToCart={handleAddToCart}
						/>
					</Route>
					<Route exact path="/cart">
						<Cart
							cart={cart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
							handleEmptyCart={handleEmptyCart}
						/>
					</Route>
					<Route exact path="/checkout">
						<Checkout
							cart={cart}
							order={order}
							onCaptureCheckout={handleCaptureCheckout}
							error={errorMessage}
						/>
					</Route>
					<Route path="/:category">
						<CategoryProducts onAddToCart={handleAddToCart} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
