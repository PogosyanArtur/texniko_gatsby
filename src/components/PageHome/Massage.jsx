import React from 'react'
import {Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Wrapper from 'components/Wrapper'

const useStyles = makeStyles(theme => ({
    Container: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ require('static/images/roller_1920х1080.jpg') })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        minHeight: '350px',
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 10,
    },
    MassageBox: {
        minWidth: '250px',
        maxWidth: '650px',
        padding: '30px',
        backgroundColor: theme.palette.primary.light,
        transition: 'opacity 0.3s',
        opacity: 0.55,
        '&:hover': {
            opacity: 1,
        }
    },
    Title: {
        fontWeight: 'bold'
    },
    Text: {
        color: theme.palette.common.white,
    }

}))

export default () => {
    const classes = useStyles()
    return (
        <section className={ classes.Container }>
            <Wrapper>
                <Paper className={ classes.MassageBox }>
                    <Typography variant="h5" gutterBottom className={ classes.Title }>Are You looking for a car?</Typography>
                    <Typography variant="body1" className={ classes.Text }>With specialists on hand to help with any part of the car shopping or vehicle ownership experience, Motors provides financing, car service and a great selection of vehicles for luxury car shoppers in Chicago, IL. Motors is ultimate Car Dealer, Automotive, Auto Dealer WordPress theme.</Typography>
                </Paper>
            </Wrapper>
        </section>
    )
}
