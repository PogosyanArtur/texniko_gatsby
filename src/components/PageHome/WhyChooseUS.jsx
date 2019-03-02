import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/styles'
import Like from '../Icons/Like'
import Excavator from '../Icons/Excavator'
import MoneyBag from '../Icons/MoneyBag'
import Machinery from '../Icons/Machinery'
import Wrapper from '../Wrapper'

const useStyles = makeStyles(theme=>({
    Container:{
        paddingTop: theme.spacing.unit * 8,
        paddingBottom: theme.spacing.unit * 10,
    },
    Title:{
        paddingBottom: theme.spacing.unit * 7,
        [theme.breakpoints.only('xs')]:{
            fontSize: '2rem',
        }
    },
    Text:{
        color: theme.palette.primary.light,
    },
    Icon:{
        fontSize:'70px',
        color:theme.palette.secondary.main
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <section  className={classes.Container}>
            <Wrapper>
                <Typography variant="h2" align='center' color="primary" className={classes.Title}>Наши преимущества</Typography>
                <Grid container justify="center" alignItems='center' spacing={16}>
                    <Grid item xs={10} md={6} xl={3}>
                        <Grid container spacing={16} alignItems='center' wrap="nowrap">
                            <Grid item><Excavator className={classes.Icon}/></Grid>
                            <Grid item><Typography variant="h6" component='p' className={classes.Text}>Большой парк техники</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} md={6} xl={3}>
                        <Grid container spacing={16} alignItems='center' wrap="nowrap">
                            <Grid item><MoneyBag className={classes.Icon}/></Grid>
                            <Grid item><Typography variant="h6" component='p' className={classes.Text}>Выгодная стоимость</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} md={6} xl={3}>
                        <Grid container spacing={16} alignItems='center' wrap="nowrap">
                            <Grid item><Like className={classes.Icon}/></Grid>
                            <Grid item><Typography variant="h6" component='p' className={classes.Text}>Срок аренды не ограничен</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} md={6} xl={3}>
                        <Grid container spacing={16} alignItems='center' wrap="nowrap">
                            <Grid item><Machinery className={classes.Icon}/></Grid>
                            <Grid item><Typography variant="h6" component='p' className={classes.Text}>Постоянно обновляемая спецтехника</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
}