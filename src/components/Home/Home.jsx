import {
	Grid,
	Container,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";

import img from "../../assets/images/home.jpg";
import useStyles from "./styles";

const Home = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify="space-between" spacing={1}>
					<Grid
						item
						xs={12}
						sm={4}
						md={3}
						lg={3}
						xl={2}
						className={classes.categories}
					>
						<List>
							<ListItem>
								<ListItemText
									className={classes.root}
									primary="Βιβλία"
								/>
							</ListItem>
							<ListItem>
								<ListItemText primary="Περιοδικά" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Αυτοκινητάκια" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Σειρές DVD" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Ταινίες DVD" />
							</ListItem>
							<ListItem>
								<ListItemText primary="CD Μουσικής" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Παιχνίδια" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Κόμικς" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Gadgets" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Pins" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Φιγούρες" />
							</ListItem>
						</List>
					</Grid>

					<Grid
						item
						xs={12}
						sm={8}
						md={9}
						lg={9}
						xl={10}
						className={classes.media}
					>
						<img
							src={img}
							style={{
								width: "100%",
							}}
							alt=""
						/>
					</Grid>
				</Grid>
			</main>
		</Container>
	);
};

export default Home;
