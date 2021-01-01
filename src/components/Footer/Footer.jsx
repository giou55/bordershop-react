import { AppBar, Typography, Container, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<AppBar position="static" className={classes.bar1}>
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
			<AppBar position="static" className={classes.bar2}>
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
