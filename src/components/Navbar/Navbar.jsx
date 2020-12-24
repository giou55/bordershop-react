import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Typography,
	Container,
	Box,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import "../../assets/css/logo.css";
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
					<Toolbar
						disableGutters={true}
						style={{ height: "80px" }}
					>
						<Box
							component={Link}
							to="/"
							style={{ textDecoration: "none" }}
							className="logo"
						>
							corner<span className="logo-span">shop</span>
						</Box>

						<div className={classes.grow} />

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
			</AppBar>
		</>
	);
};

export default Navbar;
