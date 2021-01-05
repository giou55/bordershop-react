import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
	topbar: {
		color: "#fff",
		padding: "6px",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	appbar: {
		boxShadow: "none",
		borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
		padding: "6px",
	},
	appbarContent: {
		flexWrap: "nowrap",
		[theme.breakpoints.down("xs")]: {
			flexWrap: "wrap",
		},
	},
	icon: {
		height: "18px",
		width: "auto",
	},
	phone: {
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	grow: {
		flexGrow: 1,
	},
	searchBar: {
		margin: "0 auto",
		flexBasis: "400px",
		margin: "10px 20px",
		[theme.breakpoints.down("xs")]: {
			order: "3",
			margin: "10px 0 10px 0",
		},
	},
	button: {
		marginLeft: "20px",
	},
}));

//export default makeStyles((theme) => ({
// topbar: {
// 	backgroundColor: "orange"
// },
// appbar: {
// 	boxShadow: "none",
// 	borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
// 	[theme.breakpoints.up("sm")]: {
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		marginLeft: drawerWidth,
// 	},
// },
// title: {
// 	flexGrow: 1,
// 	alignItems: "center",
// 	display: "flex",
// 	textDecoration: "none",
// },
// image: {
// 	marginRight: "300px",
// },
// menuButton: {
// 	marginRight: theme.spacing(2),
// 	[theme.breakpoints.up("sm")]: {
// 		display: "none",
// 	},
// },
// grow: {
// 	flexGrow: 1,
// },
// search: {
// 	position: "relative",
// 	borderRadius: theme.shape.borderRadius,
// 	backgroundColor: fade(theme.palette.common.white, 0.15),
// 	"&:hover": {
// 		backgroundColor: fade(theme.palette.common.white, 0.25),
// 	},
// 	marginRight: theme.spacing(2),
// 	marginLeft: 0,
// 	width: "100%",
// 	[theme.breakpoints.up("sm")]: {
// 		width: "auto",
// 	},
// },
// searchIcon: {
// 	padding: theme.spacing(0, 2),
// 	height: "100%",
// 	position: "absolute",
// 	pointerEvents: "none",
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "center",
// },
// inputRoot: {
// 	color: "inherit",
// },
// inputInput: {
// 	padding: theme.spacing(1, 1, 1, 0),
// 	// vertical padding + font size from searchIcon
// 	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
// 	transition: theme.transitions.create("width"),
// 	width: "100%",
// 	[theme.breakpoints.up("md")]: {
// 		width: "20ch",
// 	},
// },
//}));
