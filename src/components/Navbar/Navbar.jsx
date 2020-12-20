import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
	Container,
	Box,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar position="static" className={classes.topbar}>
				<Container maxWidth="lg">
					<Typography
						variant="body2"
						className="classes.topbar"
						color="inherit"
					>
						FREE SHIPPING FOR ORDERS ABOVE € 40,- ORDERED BEFORE
						17:00H, SHIPPED TODAY +31 (0) 77 79 20 000
					</Typography>
				</Container>
			</AppBar>

			<AppBar
				position="sticky"
				className={classes.appbar}
				color="inherit"
			>
				<Container maxWidth="lg">
					<Toolbar disableGutters={true}>
						<Box component={Link} to="/">
							<img
								href="/"
								src={logo}
								alt="Cornershop"
								height="60px"
								className="classes.image"
							/>
						</Box>

						<div className={classes.grow} />
						{location.pathname === "/" && (
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
			</AppBar>
		</>
	);
};

export default Navbar;
