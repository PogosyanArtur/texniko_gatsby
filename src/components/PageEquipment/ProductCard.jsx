import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Card, CardMedia, Grid } from "@material-ui/core";
import img from "assets/images/equipments/equipment_1.jpg";

const useStyles = makeStyles(theme => ({
  Card: {
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  MainGrid: {
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap"
    }
  },
  Title: {
    paddingBottom: "15px"
  },
  CardMedia: {
    minHeight: "200px",
    minWidth: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
      width: "100%"
    }
  },
  CardLabel: {
    color: theme.palette.gray[600],
    fontSize: "12px",
    fontWeight: 700
  },
  ContentContainer: {
    margin: "15px"
  },
  DescriptionItem: {
    borderRight: `1px solid ${theme.palette.gray[400]}`,
    marginBottom: "10px"
  },
  CardPrice: {
    paddingTop: "15px",
    color: theme.palette.secondary.main
  }
}));

const productCardItems = [1, 2, 3, 4, 5, 6];

const ProductCard = ({ id, title, imageData }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <Grid container className={classes.MainGrid} justify="space-evenly">
        <CardMedia className={classes.CardMedia} image={img} />
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.ContentContainer}
        >
          <Typography
            variant="h5"
            color="primary"
            wrap="noWrap"
            className={classes.Title}
          >
            Экскаватор
          </Typography>
          <Grid container spacing={16}>
            {productCardItems.map(item => (
              <Grid
                key={item}
                item
                className={classes.DescriptionItem}
                justify="space-around"
              >
                <Typography
                  className={classes.CardLabel}
                  variant="h6"
                  wrap="noWrap"
                >
                  Двигатель
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="primary"
                  wrap="noWrap"
                  align="center"
                >
                  86 л.с.
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Typography
              className={classes.CardPrice}
              variant="h5"
              component="p"
              color="secondary"
              wrap="noWrap"
              align="right"
            >
              10 600 руб/смена
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default ProductCard;
