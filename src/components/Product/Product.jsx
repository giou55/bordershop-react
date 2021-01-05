import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				component={Link}
				to={`/products/${product.sku}`}
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<Typography variant="subtitle1" gutterBottom>
					{product.name}
				</Typography>
				<Typography variant="h5">
					{product.price.formatted_with_symbol}
				</Typography>
				<CardActions disableSpacing className={classes.cardActions}>
					<Button
						aria-label="Add to Cart"
						onClick={() => onAddToCart(product.id, 1)}
						variant="contained"
						color="primary"
						className={classes.button}
						startIcon={<AddShoppingCartIcon />}
					>
						ΣΤΟ ΚΑΛΑΘΙ
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Product;
