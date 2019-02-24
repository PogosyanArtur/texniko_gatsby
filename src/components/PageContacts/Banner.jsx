import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {Typography,Divider } from '@material-ui/core'
import Wrapper from 'components/Wrapper'

const useStyles = makeStyles(theme => ({
    Banner: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${ require("static/images/road-construction-192894_1920.jpg") })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 90%',
        height: "350px",
    },
    Title:{
        paddingTop: '230px',
    },
    Divider:{
        backgroundColor: theme.palette.secondary.dark,
        marginTop: '20px',
        width:'350px'
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <section className={ classes.Banner }>
            <Wrapper>
                <Typography variant="h1" color="textSecondary" className={classes.Title}>Контакты
                    <Divider className={classes.Divider}/>
                </Typography>
            </Wrapper>
        </section>
    )
}

