import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		margin: "10px auto",
		maxWidth: "100%",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "80%",
		},
	},
	media: {
		height: 260,
	},
	cartActions: {
		justifyContent: "space-between",
	},
	buttons: {
		display: "flex",
		alignItems: "center",
	},
}));
