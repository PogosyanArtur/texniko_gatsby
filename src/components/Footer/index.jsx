import React from 'react'
import { Grid, Typography,Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Wrapper from 'components/Wrapper'

const useStyles = makeStyles(theme => ({
    Logo:{
        paddingTop: theme.spacing.unit * 2,
        color:theme.palette.common.white,
        fontSize: '1.5rem',
        lineHeight: 1,
        fontStyle:'italic',
        letterSpacing:'1px'
    },
    LogoFirstLetter:{
        color:theme.palette.secondary.main,
    },
    Container: {
        paddingTop: theme.spacing.unit * 6,
        backgroundColor: theme.palette.primary.dark,
    },
    Title:{
        color:theme.palette.common.white,
        paddingTop: theme.spacing.unit * 2,
        textTransform:'Uppercase',
        letterSpacing:'1px'
    },
    Text:{
        color: theme.palette.gray[ '600' ],
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2,
    },
    Divider:{
        backgroundColor: theme.palette.secondary.dark,
    },
    CopyRight:{
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        color: theme.palette.gray[ '600' ],
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <footer className={ classes.Container }>
            <Wrapper>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Logo}><span className={classes.LogoFirstLetter}>T</span>exniko</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>Мы доступны</Typography>
                        <Typography className={classes.Text}>ПН-ВС 09:00-21:00</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>Предложение</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>Продажа</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                    </Grid>
                </Grid>
                <Divider light className={classes.Divider}/>
                <Typography align="center" className={classes.CopyRight}>Copyright © 2003 - 2019</Typography>
            </Wrapper>
        </footer>
    )
}