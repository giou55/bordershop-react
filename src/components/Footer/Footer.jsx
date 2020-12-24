import { AppBar, Typography, Container, Box } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<AppBar position="static" className={classes.topbar}>
				<Container maxWidth="lg">
					<Typography
						align="center"
						variant="body2"
						className="classes.topbar"
						color="inherit"
					>
						© Copyright 2020
					</Typography>
				</Container>
			</AppBar>
		</>
	);
};

export default Footer;
