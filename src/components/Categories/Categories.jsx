import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
	return (
		<div>
			<List>
				{categories
					.filter((category) => category.name !== "featured")
					.map((category) => (
						<ListItem
							component={Link}
							to={category.slug}
							key={category.name}
							style={{
								padding: "2px 15px 2px 0",
							}}
						>
							<ListItemText primary={category.name} />
						</ListItem>
					))}
			</List>
		</div>
	);
};

export default Categories;
