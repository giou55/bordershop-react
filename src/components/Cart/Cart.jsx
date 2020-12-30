import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleRemoveFromCart,
	handleEmptyCart,
}) => {
	const classes = useStyles();

	const EmptyCart = () => (
		<Typography variant="subtitle1">Το καλάθι σας είναι άδειο.</Typography>
	);

	const FilledCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((item) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={4}
						xl={3}
						key={item.id}
					>
						<CartItem
							item={item}
							onUpdateCartQty={handleUpdateCartQty}
							onRemoveFromCart={handleRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant="h5">
					Σύνολο: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
						onClick={handleEmptyCart}
					>
						ΑΔΕΙΑΣΜΑ ΚΑΛΑΘΙΟΥ
					</Button>
					<Button
						component={Link}
						to="/checkout"
						className={classes.checkoutButton}
						size="large"
						type="button"
						variant="contained"
						color="primary"
					>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	if (!cart.line_items) return "Loading...";

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography variant="h5" gutterBottom>
					Το καλάθι σας
				</Typography>
				<div className={classes.toolbar} />
				{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
			</main>
		</Container>
	);
};

export default Cart;
