import {
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import useStyles from "./styles";

const RelatedProducts = ({ product }) => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h5" gutterBottom>
				ΣΧΕΤΙΚΑ ΠΡΟΪΟΝΤΑ
			</Typography>
			<Grid container spacing={4}>
				{product.related_products.map((prod) => (
					<Grid
						item
						key={prod.id}
						xs={6}
						sm={6}
						md={4}
						lg={4}
						xl={3}
					>
						<Card variant="outlined">
							<CardMedia
								component={Link}
								to={`/product/${prod.sku}`}
								className={classes.media}
								image={prod.media.source}
								title={prod.name}
							/>
							<CardContent>
								<Typography variant="subtitle1" gutterBottom>
									{prod.name}
								</Typography>
								<Typography variant="h5">
									{prod.price.formatted_with_symbol}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default RelatedProducts;
