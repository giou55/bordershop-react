import { Grid, Container, Typography } from "@material-ui/core";

import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

import img from "../../assets/images/home.jpg";
import useStyles from "./styles";

const Home = ({ categories, onAddToCart }) => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify="space-between" spacing={1}>
					<Grid
						item
						xs={12}
						sm={3}
						md={2}
						lg={2}
						xl={2}
						className={classes.categories}
					>
						<Typography
							variant="h6"
							style={{
								backgroundColor: "#eee",
							}}
						>
							Κατηγορίες
						</Typography>
						<Categories categories={categories} />
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
						<img
							src={img}
							style={{
								width: "100%",
							}}
							alt=""
						/>
					</Grid>
				</Grid>
			</main>
			<FeaturedProducts onAddToCart={onAddToCart} />
		</Container>
	);
};

export default Home;
