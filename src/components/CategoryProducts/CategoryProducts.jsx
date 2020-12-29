import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { commerce } from "../../lib/commerce";

import { Grid, Container, Typography } from "@material-ui/core";

import Product from "../Product/Product";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import useStyles from "./styles";

const CategoryProducts = ({ onAddToCart, categories }) => {
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
	}, [category]);

	return (
		products && (
			<Container maxWidth="lg">
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Grid container justify="space-between" spacing={4}>
						<Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
							<CategoriesMenu categories={categories} />
						</Grid>

						<Grid
							item
							container
							spacing={3}
							xs={12}
							sm={9}
							md={10}
							lg={10}
							xl={10}
							className={classes.media}
						>
							{products.map((product) => (
								<Grid
									item
									key={product.id}
									xs={12}
									sm={6}
									md={6}
									lg={4}
									xl={4}
								>
									<Product
										product={product}
										onAddToCart={onAddToCart}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</main>
			</Container>
		)
	);
};

export default CategoryProducts;
