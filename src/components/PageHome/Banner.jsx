import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@material-ui/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  Slide: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 bottom",
    height: "300px",
    [theme.breakpoints.up("md")]: {
      height: "400px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px"
    },
    [theme.breakpoints.up("xl")]: {
      height: "600px"
    }
  }
}));

export default () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query getHomeBannerSlideImages {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          sourceInstanceName: { eq: "mainImages" }
          name: { regex: "/homeBannerSlide_*/" }
        }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <AutoPlaySwipeableViews interval={5000}>
      {data.allFile.edges.map(src => (
        <div
          key={src.node.name}
          className={classes.Slide}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${
              src.node.publicURL
            })`
          }}
        />
      ))}
    </AutoPlaySwipeableViews>
  );
};
