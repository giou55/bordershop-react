import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Typography,
	Container,
	Box,
	Grid,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import "../../assets/css/logo.css";
import bag from "../../assets/images/shopping-bag.png";
import delivery from "../../assets/images/delivery.png";
import phone from "../../assets/images/phone.png";

import useStyles from "./styles";

const Topbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar position="static" className={classes.topbar}>
				<Container maxWidth="lg">
					<Grid
						container
						wrap="nowrap"
						alignItems="center"
						spacing={1}
					>
						<Grid item>
							<img
								src={bag}
								alt="shopping bag icon"
								className={classes.icon}
							/>
						</Grid>
						<Grid item style={{ marginRight: "20px" }}>
							<Typography variant="body2">
								ΔΩΡΕΑΝ ΑΠΟΣΤΟΛΕΣ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΠΑΝΩ ΑΠΟ 80 €
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={delivery}
								alt="delivery icon"
								className={classes.icon}
							/>
						</Grid>
						<Grid item style={{ marginRight: "20px" }}>
							<Typography variant="body2">
								ΠΑΡΑΓΓΕΛΙΕΣ ΠΡΙΝ ΑΠΟ ΤΙΣ 15:00, ΣΤΕΛΝΟΝΤΑΙ
								ΑΥΘΗΜΕΡΟΝ
							</Typography>
						</Grid>
						<Grid item className={classes.phone}>
							<img
								src={phone}
								alt="phone icon"
								className={classes.icon}
							/>
						</Grid>
						<Grid
							item
							className={classes.phone}
							style={{ marginRight: "20px" }}
						>
							<Typography variant="body2">
								(+30) 697 823 2833
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</AppBar>

			<AppBar
				position="sticky"
				className={classes.appbar}
				color="inherit"
			>
				<Container maxWidth="lg">
					<Toolbar
						disableGutters={true}
						style={{
							height: "80px",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box
							component={Link}
							to="/"
							style={{
								textDecoration: "none",
								marginRight: "20px",
							}}
							className="logo"
						>
							CORNERSHOP
						</Box>

						{location.pathname !== "/cart" && (
							<div className={classes.desktopSearchBar}>
								<SearchBar />
							</div>
						)}

						{location.pathname !== "/cart" && (
							<div className={classes.button}>
								<IconButton
									component={Link}
									to="/cart"
									aria-label="Show cart items"
									color="inherit"
								>
									<Badge
										badgeContent={totalItems}
										color="secondary"
									>
										<ShoppingCart />
									</Badge>
								</IconButton>
							</div>
						)}
					</Toolbar>
				</Container>

				<Container maxWidth="lg" className={classes.mobileSearchBar}>
					<Toolbar
						disableGutters={true}
						style={{
							height: "80px",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						{location.pathname !== "/cart" && <SearchBar />}
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Topbar;
