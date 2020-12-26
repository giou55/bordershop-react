import { Grid, Container, Typography } from "@material-ui/core";

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
					<Grid
						item
						xs={12}
						sm={3}
						md={2}
						lg={2}
						xl={2}
						className={classes.categories}
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
									<Typography variant="h6">
										{product.name}
									</Typography>
									<Typography variant="body2">
										{product.description}
									</Typography>
									<div>
										<img
											src={product.media.source}
											alt=""
										/>
									</div>
								</div>
							))}
					</Grid>
				</Grid>
			</main>
		</Container>
	);
};

export default ProductDetails;
