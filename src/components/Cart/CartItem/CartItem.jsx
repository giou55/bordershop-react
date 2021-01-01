import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();

	return (
		<Card>
			<CardMedia
				image={item.media.source}
				alt={item.name}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="body1">{item.name}</Typography>
				<Typography variant="h5">
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button
						type="button"
						size="small"
						onClick={() =>
							onUpdateCartQty(item.id, item.quantity - 1)
						}
					>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						type="button"
						size="small"
						onClick={() =>
							onUpdateCartQty(item.id, item.quantity + 1)
						}
					>
						+
					</Button>
				</div>
				<IconButton onClick={() => onRemoveFromCart(item.id)}>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default CartItem;
