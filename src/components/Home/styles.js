import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(0),
		backgroundColor: "#fff"
	},
	categories: {
		// height: "450px",
		// backgroundColor: "yellow",
	},
	media: {
		height: "450px",
	}
}));
