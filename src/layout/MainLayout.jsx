import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles(theme=>({
    spacingTop :{
        marginTop: '216px',
        [theme.breakpoints.down('md')]:{
        marginTop: '210px',
        }
    }
}))

const MainLayout = ({children}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <Header />
                <div className={classes.spacingTop}></div>
                <main>{children}</main>
            <Footer/>            
        </Fragment>
    )
}

export default MainLayout
