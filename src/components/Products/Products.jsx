import { Grid, Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

import Product from "../Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();
	let { text } = useParams();

	let results = products.filter((product) =>
		product.name.toLowerCase().includes(text.toLowerCase())
	);

	let resultsNumber = results.length;

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography variant="h5">
					Αποτελέσματα αναζήτησης για {text}
				</Typography>

				{resultsNumber > 1 && (
					<Typography variant="body1">
						Βρέθηκαν {resultsNumber} προϊόντα
					</Typography>
				)}

				{resultsNumber < 1 && (
					<Grid
						container
						justify="center"
						alignItems="center"
						style={{
							backgroundColor: "#eee",
							margin: "60px auto",
							width: "70%",
							padding: "100px 50px",
						}}
					>
						<Grid item>
							<Typography variant="body2" align="center">
								Δεν βρέθηκαν προϊόντα...
							</Typography>
						</Grid>
					</Grid>
				)}

				{resultsNumber == 1 && (
					<Typography variant="body2">Βρέθηκε 1 προϊόν</Typography>
				)}

				<div className={classes.toolbar} />
				<Grid container justify="center" spacing={4}>
					{results.map((result) => (
						<Grid
							item
							key={result.id}
							xs={12}
							sm={6}
							md={4}
							lg={4}
							xl={3}
						>
							<Product
								product={result}
								onAddToCart={onAddToCart}
							/>
						</Grid>
					))}
				</Grid>
			</main>
		</Container>
	);
};

export default Products;
