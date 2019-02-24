import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button,Collapse  } from '@material-ui/core';
import Wrapper from 'components/Wrapper'
import ProductCard from './ProductCard'
import {productListData} from 'data'

const useStyles = makeStyles(theme => ({
    Header: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
    },
    Wrap: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6
    },
    Title: {
        textTransform: 'uppercase',
        color: theme.palette.common.white,
        fontSize: "1.4rem",
        [ theme.breakpoints.up('sm') ]: {
            fontSize: "1.6rem",
        },
        [ theme.breakpoints.up('md') ]: {
            fontSize: "2rem",
        },
        [ theme.breakpoints.up('lg') ]: {
            fontSize: "2.5rem",
        },
        [ theme.breakpoints.up('xl') ]: {
            fontSize: "3rem",
        },
    },
    TitleAccent: {
        color: theme.palette.secondary.main
    },
}))

const ProductList = () => {
    const classes = useStyles()
    let [ showAllState, setShowAllState ] = useState(false)
    const showAllHandler = () => (
        setShowAllState(showAllState = true)
    )
    return (
        <section>
            <header className={ classes.Header }>
                <Wrapper>
                    <Typography variant="h2" className={ classes.Title }>добро пожаловать <span className={ classes.TitleAccent }>в мир спецтехники</span></Typography>
                </Wrapper>
            </header>
            
            <Wrapper className={ classes.Wrap }>
                <Collapse in={showAllState} timeout={1000} collapsedHeight="600px">
                    <Grid container spacing={ 24 } justify="center" >
                        {
                            productListData.map((item) => 
                                <Grid item key={ item.id }>
                                    <ProductCard id={item.id} title={item.title}/>
                                </Grid>
                        )
                        }            
                    </Grid>
                </Collapse>
             </Wrapper>           
                <Grid container justify="center" className={ classes.Wrap }>
                    { !showAllState ? <Button onClick={ showAllHandler } variant="contained" color="primary">Показать Все</Button> : null }
                </Grid>            
        </section>

    )
}
export default ProductList;