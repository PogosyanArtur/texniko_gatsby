import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Card, CardMedia, Grid } from "@material-ui/core";

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

const ProductCard = ({ title, img, descriptions, price }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <Grid container className={classes.MainGrid}>
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
            {title}
          </Typography>
          <Grid container spacing={16}>
            {descriptions.map(item => (
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
                  {item.label}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="primary"
                  wrap="noWrap"
                  align="center"
                >
                  {item.text}
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
              {price} руб/смена
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default ProductCard;
