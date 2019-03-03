import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Divider, Grid, List, ListItem,ListItemText } from '@material-ui/core'
import Wrapper from 'components/Wrapper'
import ProductCard from './ProductCard'
import equipmentBanner from 'assets/images/main/bg_6.jpg'

import productListData from 'data/productListData'


const useStyles = makeStyles(theme => ({
    Banner: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${ equipmentBanner })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 90%',
        backgroundSize: 'cover',
        height: "350px",
    },
    Title: {
        paddingTop: '230px',
        [ theme.breakpoints.down('xs') ]: {
            fontSize: '30px'
        }
    },
    Divider: {
        backgroundColor: theme.palette.secondary.dark,
        marginTop: '20px',
        width: '350px'
    },
    Content: {
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    ListHeader:{
        padding:'15px',
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
    },
    Lists:{
        minWidth:'250px'
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <Fragment>
            <section className={ classes.Banner }>
                <Wrapper>
                    <Typography variant="h1" color="textSecondary" className={ classes.Title }>Наши спецтехники
                        <Divider className={ classes.Divider } />
                    </Typography>
                </Wrapper>
            </section>
            <section className={ classes.Content }>
                <Wrapper>
                    <Grid container spacing={ 16 }>
                        <Grid item xs={ 12 } lg={4}>
                            <div className={classes.Lists}>
                                <Typography className={classes.ListHeader} variant="h5">Поиск</Typography>
                                <List>
                                        <ListItem divider button selected>
                                            <ListItemText primary="Все"/>
                                        </ListItem>
                                    {productListData.map(item=>(
                                        <ListItem divider button key={item.title}>
                                            <ListItemText primary={item.title}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={ 12 } lg={8}>
                            <ProductCard/>
                        </Grid>
                    </Grid>
                </Wrapper>
            </section>
        </Fragment>
    )
}