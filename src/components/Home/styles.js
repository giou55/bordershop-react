import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(0),
	},
	categories: {
		height: "450px",
		backgroundColor: "yellow",
	},
	root: {
		margin: "1px",
		padding: "1px",
	},
	media: {
		height: "450px",
	},
	ListItem: {
			margin: 0,
			padding: 0,
    }
}));
