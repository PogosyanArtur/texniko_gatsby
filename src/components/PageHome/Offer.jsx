import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, Typography, Hidden } from '@material-ui/core'
import Wrapper from 'components/Wrapper'
import IconBulldozer from 'components/Icons/IconBulldozer'
import IconExcavator1 from 'components/Icons/IconExcavator_1'


const useStyles = makeStyles(theme => ({
    HomeOffer: {
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)),url(${ require('static/images/excavator-406812_1920.jpg') })`,
        [ theme.breakpoints.up('md') ]: {
            paddingTop: theme.spacing.unit * 8,
            paddingBottom: theme.spacing.unit * 8,
        },
    },
    Wrapper: {
        height: '100%',
    },
    Container: {
        height: '100%',
    },
    Block: {
        minHeight: '250px',
        width: '100%',
        opacity: 0.55,
        display: 'flex',
        alignItems: 'center',
        transition:'opacity 0.3s',
        padding: theme.spacing.unit * 5,
        [ theme.breakpoints.up('lg') ]: {
            minWidth: '350px',
            maxWidth: '550px'
        },
        "&:hover":{
            opacity: 1,
        }
    },
    LeftBlock: {
        backgroundColor: theme.palette.warning.light,
    },
    RightBlock: {
        backgroundColor: theme.palette.primary.light,
    },
    HomeOfferCardTitle: {
        color: theme.palette.common.dark,
        fontWeight: 'bold'
    },
    HomeOfferCardText: {
        color: theme.palette.common.white,
    },
    HomeOfferCardIcon:{
        fontSize: 100, 
        color: theme.palette.common.dark
    }

}))


export default () => {
    const classes = useStyles()
    return (
        <section className={ classes.HomeOffer }>
            <Wrapper className={ classes.Wrapper }>
                <Grid container justify="center" alignItems="center" className={ classes.Container } spacing={ 16 }>
                    <Grid item xs={ 12 } lg>
                        <Paper className={ `${ classes.RightBlock } ${ classes.Block }` }>
                            <Grid container justify="space-between" spacing={ 16 }>
                                <Hidden implementation="css" xsDown>
                                    <Grid item sm={ 3 }><IconBulldozer className={classes.HomeOfferCardIcon} /></Grid>
                                </Hidden>
                                <Grid item sm={ 9 }>
                                    <Typography variant="h5" gutterBottom className={ classes.HomeOfferCardTitle }>Are You looking for a car?</Typography>
                                    <Typography variant="body1" className={ classes.HomeOfferCardText }>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={ 12 } lg>
                        <Paper className={ `${ classes.LeftBlock } ${ classes.Block }` }>
                            <Grid container justify="space-between" spacing={ 16 }>
                                <Hidden implementation="css" xsDown>
                                    <Grid item sm={ 3 }><IconExcavator1 className={classes.HomeOfferCardIcon}/></Grid>
                                </Hidden>
                                <Grid item sm={ 9 }>
                                    <Typography variant="h5" gutterBottom className={ classes.HomeOfferCardTitle }>Are You looking for a car?</Typography>
                                    <Typography variant="body1" className={ classes.HomeOfferCardText }>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
}