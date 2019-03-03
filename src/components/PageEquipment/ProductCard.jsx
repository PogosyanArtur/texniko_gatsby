import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Card, CardMedia,Grid } from '@material-ui/core';
import img from 'assets/images/equipments/equipment_1.jpg'
const useStyles = makeStyles(theme => ({
    Card:{
        [theme.breakpoints.down('md')]:{
            width: '250px',
        }
    },
    CardMedia: {
        height: '200px',
        width: '250px',
    },
    CardTitle: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 1.5,
    },
    CardLabel:{
        color:theme.palette.gray[600],
        fontSize:'12px',
        fontWeight:700
    },
    DescriptionItem:{
        borderRight:`1px solid ${theme.palette.gray[400]}`
    },
    CardPrice:{
        color:theme.palette.secondary.main,
    }
}))

const ProductCard = ({ id, title, imageData }) => {
    const classes = useStyles()
    return (
        <Card className={classes.Card}>
            <Grid container justify="flex-start" spacing={16}>
                <Grid item xs={12} sm>
                    <CardMedia
                        component="img"
                        className={ classes.CardMedia }
                        src={ img} />
                </Grid>
                <Grid item xs={12} sm style={{flexGrow:3}}>
                    <Grid container direction="column" justify="space-around">
                           <Typography className={ classes.CardTitle } variant="h5" color="primary" wrap="noWrap">Экскаватор</Typography>
                            <Grid container spacing={16}>
                                <Grid item  xs={12} sm  className={classes.DescriptionItem}>
                                        <Typography className={ classes.CardLabel } variant="h6" wrap="noWrap">Двигатель</Typography>
                                        <Typography variant="h6" component="p" color="primary" wrap="noWrap">86 л.с.</Typography>
                                </Grid>
                            </Grid>
                        <Grid container direction="column" alignItems="flex-end">                  
                            <Typography className={ classes.CardPrice } variant="h5" component="p" color="secondary" wrap="noWrap">10 600 руб/смена</Typography>
                        </Grid>
                     </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}
export default ProductCard;