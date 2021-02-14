import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import styles from './Header.module.scss'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}))
const options = ['Equipos', 'Accesorios', 'Partes y Repuestos', 'Contáctenos']
export default function Header() {
	const classes = useStyles()

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<div className={styles.header}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="red"
						aria-label="menu"
					>
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={handleClick}
						>
							Menu
						</Button>
					</IconButton>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						{options.map((option) => (
							<MenuItem key={option} onClick={handleClose}>
								{option}
							</MenuItem>
						))}
					</Menu>
					<Typography variant="h6" color="inherit">
						Pro-Bio
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}
