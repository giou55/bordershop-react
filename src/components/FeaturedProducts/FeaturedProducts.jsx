import { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import { commerce } from "../../lib/commerce";

import Product from "../Product/Product";
import useStyles from "./styles";

const FeaturedProducts = ({ onAddToCart }) => {
	const [products, setProducts] = useState([]);

	const classes = useStyles();

	const fetchFeaturedProducts = async () => {
		const { data } = await commerce.products.list({
			category_slug: "featured",
		});
		setProducts(data);
	};

	useEffect(() => {
		fetchFeaturedProducts();
	}, []);

	return (
		products && (
			<div>
				<Typography variant="h5">FEATURED</Typography>
				<div className={classes.toolbar} />
				<Grid container justify="center" spacing={4}>
					{products.map((product) => (
						<Grid
							item
							key={product.id}
							xs={12}
							sm={6}
							md={4}
							lg={4}
							xl={3}
						>
							<Product
								product={product}
								onAddToCart={onAddToCart}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		)
	);
};

export default FeaturedProducts;
