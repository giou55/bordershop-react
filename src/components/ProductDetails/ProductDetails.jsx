import {
	Grid,
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { useParams } from "react-router-dom";

import useStyles from "./styles";

const ProductDetails = ({ categories, onAddToCart, products }) => {
	let { sku } = useParams();

	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify="space-between" spacing={4}>
					<Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
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
									<Typography
										variant="body1"
										gutterBottom
										style={{ color: "#555" }}
									>
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
												ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ
											</Button>
										</Grid>
									</Grid>
									<Typography
										variant="h5"
										gutterBottom
										style={{
											marginTop: "60px",
										}}
									>
										ΣΧΕΤΙΚΑ ΠΡΟΪΟΝΤΑ
									</Typography>
									<Grid container>
										{product.related_products.map(
											(product) => (
												<div key={product.id}>
													<Grid item>
														<Card
															variant="outlined"
															className={
																classes.root
															}
														>
															<CardMedia
																component={Link}
																to={`/product/${product.sku}`}
																className={
																	classes.relatedMedia
																}
																image={
																	product
																		.media
																		.source
																}
																title={
																	product.name
																}
															/>
															<CardContent>
																<Typography
																	variant="subtitle1"
																	gutterBottom
																>
																	{
																		product.name
																	}
																</Typography>
																<Typography variant="h5">
																	{
																		product
																			.price
																			.formatted_with_symbol
																	}
																</Typography>
															</CardContent>
														</Card>
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
