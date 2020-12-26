import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const CategoriesMenu = ({ categories }) => {
	return (
		<div>
			<Typography
				variant="h6"
				style={{
					backgroundColor: "#eee",
					padding: "4px 8px",
				}}
			>
				Κατηγορίες
			</Typography>
			<List>
				{categories
					.filter((category) => category.name !== "featured")
					.map((category) => (
						<ListItem
							component={Link}
							to={`/${category.slug}`}
							key={category.name}
							style={{
								padding: "0 10px 0 8px",
								color: "#333",
							}}
						>
							<ListItemText primary={category.name} />
						</ListItem>
					))}
			</List>
		</div>
	);
};

export default CategoriesMenu;
