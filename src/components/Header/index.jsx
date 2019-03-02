import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Hidden,  Button, Toolbar } from '@material-ui/core'
import navigation_Data from 'data/navigationData'
import Wrapper from 'components/Wrapper'
import TopLine from "./TopLine"
import Body from "./Body"

const useStyles = makeStyles((theme)=>({
	AppBar:{
		backgroundColor: theme.palette.primary.main,
	},
	Toolbar: {
		backgroundColor: theme.palette.secondary.main,
	},

	Button: {
		height: 65,
		color: theme.palette.common.white,
		fontSize:'1rem',
		fontWeight:'400',
		borderRadius: '0',
		letterSpacing:"1px",
		transition:"all 0.3s",
		'&:hover, &:focus': {
			backgroundColor: theme.palette.primary.main,
		}
	},
	ButtonActive:{
		backgroundColor: theme.palette.primary.main,
	}

}))

const Header = () => {

	const classes = useStyles()
	return	(
	<AppBar position="fixed" className={ classes.AppBar }>
			<TopLine/>
			<Body/>
			<Hidden implementation="css" mdDown>
				<Toolbar className={ classes.Toolbar } component="nav">
				<Wrapper style={{display:"flex"}}>
					{ 
						navigation_Data.map(item => (
							<Button
								key={ item.value }
								fullWidth
								variant='text'
								className={ classes.Button }
							>
								{ item.name }
							</Button>
						))
					 }
					</Wrapper>
				</Toolbar>
			</Hidden>
		</AppBar>
		)
} 
export default Header

