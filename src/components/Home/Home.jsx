import { AppBar, Typography, Grid, Container } from "@material-ui/core";

import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

import img from "../../assets/images/home.jpg";
import imgMobile from "../../assets/images/home-mobile.jpg";

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
						<img src={img} className={classes.image} alt="" />
						<img
							src={imgMobile}
							className={classes.imageMobile}
							alt=""
						/>
					</Grid>
				</Grid>
			</main>
			<FeaturedProducts onAddToCart={onAddToCart} />

			<div className={classes.toolbar} />
			<AppBar position="static" className={classes.about}>
				<Container maxWidth="lg">
					<Typography
						align="left"
						variant="h5"
						color="inherit"
						gutterBottom
					>
						Cool gadgets, δώρα, dvds, βιβλία, κόμικς, παιχνίδια και
						φιγούρες
					</Typography>
					<Typography align="left" variant="body2" color="inherit">
						Το Bordershop.gr είναι ένα online κατάστημα για
						οποιονδήποτε με πάθος στον κινηματογράφο, στην μουσική,
						στα κόμικς και στα gadgets. Υπάρχει μεγάλη ποικιλία από
						προϊόντα, όλα σε άριστη κατάσταση. Οι παραγγελίες που
						γίνονται πριν τις 15:00, βρίσκονται την επόμενη μέρα στο
						σπίτι σας. Δεν υπάρχουν επιπλέον κρυφές χρεώσεις, πέραν
						τις αναφερόμενες. Καλές αγορές στο Cornershop.gr!
					</Typography>
				</Container>
			</AppBar>
		</Container>
	);
};

export default Home;
