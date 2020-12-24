import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { commerce } from "../../lib/commerce";

import { Grid, Container } from "@material-ui/core";

import Product from "../Product/Product";
import useStyles from "./styles";

const CategoryProducts = ({ onAddToCart }) => {
	const [products, setProducts] = useState([]);

	let { category } = useParams();

	const classes = useStyles();

	const fetchProductsByCategory = async (category) => {
		const { data } = await commerce.products.list({
			category_slug: category,
		});
		setProducts(data);
	};

	useEffect(() => {
		fetchProductsByCategory(category);
	}, []);

	return (
		products && (
			<Container maxWidth="lg">
				<main className={classes.content}>
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
				</main>
			</Container>
		)
	);
};

export default CategoryProducts;
