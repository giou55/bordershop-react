import { AppBar, Typography, Container, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<AppBar position="static" className={classes.bar1}>
				<Container maxWidth="lg">
					<Typography align="left" variant="h5" color="inherit">
						Cool gadgets, δώρα, dvds, βιβλία, κόμικς, παιχνίδια και
						φιγούρες
					</Typography>
					<Typography align="left" variant="body2" color="inherit">
						Το Cornershop.gr είναι ένα online κατάστημα για
						οποιονδήποτε με πάθος στον κινηματογράφο, στην μουσική,
						στα κόμικς και στα gadgets. Our range includes the
						latest and most popular products. With a range of over
						5000 products and 50 categories, we can offer you almost
						everything. We are up to date and offer a very high
						quality. It is your order ranzendsnel home thanks to our
						great shipping service. Orders before 17:00, the next
						day in the house. In addition, we do not charge any
						shipping costs or other hidden charges.
					</Typography>
				</Container>
			</AppBar>
			<AppBar position="static" className={classes.bar2}>
				<Container maxWidth="lg">
					<Grid container justify="space-around" spacing={6}>
						<Grid item>
							<Typography
								align="left"
								variant="h6"
								color="inherit"
								gutterBottom
							>
								ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ
							</Typography>
							<Typography
								align="left"
								variant="body2"
								color="inherit"
							>
								Visa, Mastercard
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								align="left"
								variant="h6"
								color="inherit"
								gutterBottom
							>
								SOCIAL MEDIA
							</Typography>
							<Typography
								align="left"
								variant="body2"
								color="inherit"
							>
								Facebook, YouTube
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								align="left"
								variant="h6"
								color="inherit"
								gutterBottom
							>
								ΕΠΙΚΟΙΝΩΝΙΑ
							</Typography>
							<Typography
								align="left"
								variant="body2"
								color="inherit"
							>
								Cornershop.gr Cool gadgets, books, dvds and toys
								(+30) 697 823 2833
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</AppBar>
			<AppBar position="static" className={classes.bar3}>
				<Container maxWidth="lg">
					<Typography align="center" variant="body2" color="inherit">
						© Copyright 2021 - Cornershop
					</Typography>
				</Container>
			</AppBar>
		</>
	);
};

export default Footer;
