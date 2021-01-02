import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton, Paper } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

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
	const { register, handleSubmit } = useForm();

	const history = useHistory();

	return (
		<Paper
			component="form"
			variant="outlined"
			className={classes.root}
			onSubmit={handleSubmit((data) => {
				history.push("/search/" + data.textInput);
			})}
		>
			<InputBase
				name="textInput"
				inputRef={register}
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
