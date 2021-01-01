import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 0,
	},
}));

export default function SearchBar() {
	const classes = useStyles();

	return (
		<Paper component="form" variant="outlined" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Τι είναι αυτό που ψάχνετε;"
				inputProps={{ "aria-label": "Τι είναι αυτό που ψάχνετε;" }}
			/>
			<IconButton
				type="submit"
				color="primary"
				className={classes.iconButton}
				aria-label="αναζήτηση"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
