import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(0),
		backgroundColor: "#fff",
		marginBottom: "40px",
	},
	media: {
		height: "auto",
	},
	image: {
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	imageMobile: {
		width: "100%",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	about: {
		boxShadow: "none",
		backgroundColor: "#fff",
		color: "#333",
		padding: "15px",
	},
}));
