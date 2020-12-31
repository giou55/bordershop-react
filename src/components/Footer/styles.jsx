import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	bar1: {
		boxShadow: "none",
		backgroundColor: "#fff",
		color: "#333",
		padding: "15px",
	},
	bar2: {
		boxShadow: "none",
		backgroundColor: "#f3f4f6",
		borderTop: "1px solid #ddd",
		color: "#333",
		padding: "15px",
	},
	bar3: {
		boxShadow: "none",
		backgroundColor: "#0077ab",
		color: "#fff",
		padding: "10px",
	},
}));
