import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  MobileStepper,
  IconButton
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Carousel from "nuka-carousel";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Wrapper from "components/Wrapper";
import galleyData from "data/galleryData";

const useStyles = makeStyles(theme => ({
  Title: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  GalleryContainer: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing.unit * 5
  },
  Card: {
    minWidth: "300px"
  },
  CardMedia: {
    height: "250px"
  },
  CardMediaContainer: {
    position: "relative"
  },
  CardMediaCover: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    opacity: 0.4
  },
  CardTitle: {
    color: theme.palette.primary.main
  },
  MobileStepper: {
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main
  },
  MobileStepperDotActive: {
    backgroundColor: theme.palette.secondary.main
  },
  IconButton: {
    backgroundColor: "transparent",
    transition: "all 0.2s",
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    borderRadius: "5px",
    border: `2px solid transparent`,
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "transparent",
      borderRadius: "5px",
      border: `2px solid ${theme.palette.secondary.main}`
    }
  },
  MobileStepperDot: {
    width: "6px",
    height: "6px"
  },
  LightBox: {
    zIndex: 5000
  }
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const xlUp = useMediaQuery(theme.breakpoints.up("xl"));
  let [currentIndex, setCurrentIndex] = useState(0);
  let [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  let [photoIndex, setPhotoIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query getHomeGalleryImages {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "gallery" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const imageData = data.allFile.edges.reduce((acc, item) => {
    let obj = {};
    galleyData.forEach(galleryItem => {
      if (galleryItem.name === item.node.name) {
        obj.src = item.node.publicURL;
        obj.name = galleryItem.name;
        obj.title = galleryItem.title;
      }
    });
    acc.push(obj);
    return acc;
  }, []);

  const imageDataLength = imageData.length;

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleBack = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const LightboxOpenHandler = index => {
    setLightboxIsOpen(true);
    setPhotoIndex(index);
  };
  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 2;
  }
  if (xlUp) {
    SlideToShowNumber = 3;
  }
  console.log("imageData Index:", photoIndex);
  return (
    <section className={classes.GalleryContainer}>
      <Wrapper>
        <Typography
          className={classes.Title}
          variant="h2"
          align="center"
          color="textSecondary"
        >
          Фотогалерея
        </Typography>
        <Carousel
          slideIndex={currentIndex}
          afterSlide={index =>
            currentIndex !== index ? setCurrentIndex(index) : null
          }
          slidesToShow={SlideToShowNumber}
          swiping
          withoutControls
          cellAlign="left"
          cellSpacing={20}
        >
          {imageData.map((item, index) => (
            <Card
              key={item.name}
              className={classes.Card}
              elevation={0}
              onClick={() => LightboxOpenHandler(index)}
            >
              <div className={classes.CardMediaContainer}>
                <CardMedia className={classes.CardMedia} image={item.src} />
                <div className={classes.CardMediaCover} />
              </div>
              <CardContent>
                <Typography
                  variant="body1"
                  component="h4"
                  className={classes.CardTitle}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        <MobileStepper
          variant="dots"
          steps={imageDataLength - 1}
          activeStep={currentIndex}
          position="static"
          className={classes.MobileStepper}
          classes={{
            dotActive: classes.MobileStepperDotActive,
            dot: classes.MobileStepperDot
          }}
          nextButton={
            <IconButton
              disableRipple
              className={classes.IconButton}
              size="small"
              onClick={handleNext}
              disabled={currentIndex === imageDataLength}
            >
              <KeyboardArrowRight fontSize="small" />
            </IconButton>
          }
          backButton={
            <IconButton
              disableRipple
              className={classes.IconButton}
              size="small"
              onClick={handleBack}
              disabled={currentIndex === 0}
            >
              <KeyboardArrowLeft fontSize="small" />
            </IconButton>
          }
        />
        {lightboxIsOpen && (
          <Lightbox
            mainSrc={imageData[photoIndex].src}
            nextSrc={imageData[(photoIndex + 1) % imageDataLength].src}
            prevSrc={
              imageData[(photoIndex + imageDataLength - 1) % imageDataLength]
                .src
            }
            onCloseRequest={() => setLightboxIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + imageDataLength - 1) % imageDataLength
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % imageDataLength)
            }
            reactModalStyle={{ overlay: { zIndex: theme.zIndex.lightBox } }}
          />
        )}
      </Wrapper>
    </section>
  );
};
