import { AppBar, Typography, Container, Grid } from "@material-ui/core";

import facebook from "../../assets/images/facebook-icon.png";
import instagram from "../../assets/images/instagram-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import youtube from "../../assets/images/youtube-icon.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";

import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<AppBar position="static" className={classes.bar1}>
				<Container maxWidth="lg">
					<Grid
						className={classes.bar1Content}
						container
						wrap="wrap"
						spacing={6}
					>
						<Grid item>
							<Typography
								align="left"
								variant="h6"
								color="inherit"
								gutterBottom
							>
								ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ
							</Typography>
							<Grid item container spacing={2}>
								<Grid item>
									<img
										src={visa}
										alt="visa icon"
										className={classes.cardIcon}
									/>
								</Grid>
								<Grid item>
									<img
										src={mastercard}
										alt="mastercard icon"
										className={classes.cardIcon}
									/>
								</Grid>
							</Grid>
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
								Bordershop.gr<br></br> Cool gadgets, βιβλία,
								dvds, κόμικς και παιχνίδια<br></br>
								(+30) 697 823 2833
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
							<Grid
								item
								container
								justify="space-around"
								spacing={2}
							>
								<Grid item>
									<img
										src={facebook}
										alt="facebook icon"
										className={classes.icon}
									/>
								</Grid>
								<Grid item>
									<img
										src={instagram}
										alt="instagram icon"
										className={classes.icon}
									/>
								</Grid>
								<Grid item>
									<img
										src={twitter}
										alt="twitter icon"
										className={classes.icon}
									/>
								</Grid>
								<Grid item>
									<img
										src={youtube}
										alt="youtube icon"
										className={classes.icon}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</AppBar>
			<AppBar position="static" className={classes.bar2}>
				<Container maxWidth="lg">
					<Typography align="center" variant="body2" color="inherit">
						© Copyright 2021 - Bordershop
					</Typography>
				</Container>
			</AppBar>
		</>
	);
};

export default Footer;
