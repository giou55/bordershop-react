import { Grid, Container } from "@material-ui/core";

import img404 from "../assets/images/404.jpg";

const NotFoundPage = () => {
	return (
		<Container maxWidth="lg">
			<Grid container justify="center" alignItems="center">
				<img
					src={img404}
					alt=""
					style={{ width: "60%", margin: "90px auto 30px" }}
				/>
			</Grid>
		</Container>
	);
};

export default NotFoundPage;
