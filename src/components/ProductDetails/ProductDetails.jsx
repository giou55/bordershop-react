import { Grid, Container, Typography, Button } from "@material-ui/core";

import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { useParams } from "react-router-dom";

import Product from "../Product/Product";

import useStyles from "./styles";

const ProductDetails = ({ categories, onAddToCart, products }) => {
	let { sku } = useParams();

	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify="space-between" spacing={4}>
					<Grid
						item
						xs={12}
						sm={3}
						md={2}
						lg={2}
						xl={2}
					>
						<CategoriesMenu categories={categories} />
					</Grid>

					<Grid
						item
						xs={12}
						sm={9}
						md={10}
						lg={10}
						xl={10}
						className={classes.media}
					>
						{products
							.filter((product) => product.sku == sku)
							.map((product) => (
								<div key={product.id}>
									<Typography variant="h4" gutterBottom>
										{product.name}
									</Typography>
									<Typography variant="body2" gutterBottom>
										{product.description}
									</Typography>
									<Grid
										container
										spacing={6}
										className={classes.inner}
									>
										<Grid
											item
											xs={12}
											sm={12}
											md={9}
											lg={8}
											xl={8}
										>
											<img
												src={product.media.source}
												alt=""
												style={{ width: "100%" }}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={12}
											md={3}
											lg={4}
											xl={4}
										>
											<Typography
												variant="h4"
												gutterBottom
											>
												{
													product.price
														.formatted_with_symbol
												}
											</Typography>
											<Button
												aria-label="Add to Cart"
												onClick={() =>
													onAddToCart(product.id, 1)
												}
												variant="contained"
												color="secondary"
												className={classes.button}
											>
												ΣΤΟ ΚΑΛΑΘΙ
											</Button>
										</Grid>
									</Grid>
									<Typography
										variant="h5"
										gutterBottom
										style={{
											marginTop: "40px",
										}}
									>
										ΣΧΕΤΙΚΑ ΠΡΟΪΟΝΤΑ
									</Typography>
									<Grid container>
										{product.related_products.map(
											(product) => (
												<div key={product.id}>
													<Grid
														item
														xs={12}
														sm={6}
														md={12}
														lg={12}
														xl={12}
													>
														<Product
															product={product}
															onAddToCart={
																onAddToCart
															}
														/>
														{/* <Typography
															variant="h6"
															gutterBottom
														>
															{product.name}
														</Typography>
														<img
															src={
																product.media
																	.source
															}
															alt=""
															style={{
																width: "100%",
															}}
														/> */}
													</Grid>
												</div>
											)
										)}
									</Grid>
								</div>
							))}
					</Grid>
				</Grid>
			</main>
		</Container>
	);
};

export default ProductDetails;
