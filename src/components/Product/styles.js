import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		margin: "10px auto",
		maxWidth: "100%",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "80%",
		},
	},
	content: {
		backgroundColor: "#fff",
		minHeight: "800px",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
}));
