import ReactDOM from "react-dom";

import App from "./App";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#009bdf",
		},
		secondary: {
			main: "#19810d",
		},
	},
});

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
