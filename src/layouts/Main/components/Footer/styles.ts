import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(6, 0),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(12, 0),
		},
		background: '#1b1642',
	},
	footerContainer: {
		maxWidth: 1100,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
	},
	logoContainerItem: {
		paddingTop: 0,
	},
	logoContainer: {
		width: 120,
		height: 32,
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
	groupTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.dark,
		marginBottom: theme.spacing(1),
	},
	socialIcon: {
		padding: 0,
		marginRight: theme.spacing(1),
		color: 'rgba(255,255,255,.6)',
		'&:hover': {
			background: 'transparent',
		},
		'&:last-child': {
			marginRight: 0,
		},
	},
	icon: {
		fontSize: 24,
	},
	menuListContainer: {
		padding: '0 !important',
	},
	menu: {
		display: 'flex',
	},
	menuItem: {
		margin: theme.spacing(2),
		'&:last-child': {
			marginBottom: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
		paddingBottom: theme.spacing(1 / 2),
		'&:last-child': {
			paddingBottom: 0,
		},
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
		color: 'white',
	},
	divider: {
		width: '100%',
	},
	navLink: {
		color: 'rgba(255,255,255,.6)',
	},
	listItem: {
		cursor: 'pointer',
		'&:hover > .menu-item, &:hover svg': {
			color: theme.palette.primary.dark,
		},
	},
}));

export default useStyles;
