import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        maxWidth: '250px'
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
}))

const ProductCard = ({id, title}) => {
    const classes = useStyles()
    return (
        <Card className={ classes.Card }>
            <CardActionArea component="a">
                <CardMedia
                    className={ classes.CardMedia }
                    image={ `${require(`static/images/productListCards/cardID_${id}.jpg`)}` }
                    title={title}
                />
                <CardContent>
                    <Typography className={ classes.CardTitle } variant="h6" color="primary" component="h4" wrap="noWrap" align="center">{title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
export default ProductCard;