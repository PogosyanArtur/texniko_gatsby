import React, { Fragment, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Typography,
  Divider,
  GridList,
  GridListTile,
  ListSubheader
} from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Wrapper from "components/Wrapper";
import bannerImage from "assets/images/main/bg_5.jpg";
import galleyData from "data/galleryData";

const useStyles = makeStyles(theme => ({
  Banner: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 90%",
    backgroundSize: "cover",
    height: "350px"
  },
  Title: {
    paddingTop: "230px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px"
    }
  },
  Divider: {
    backgroundColor: theme.palette.secondary.dark,
    marginTop: "20px",
    width: "350px"
  },
  Content: {
    paddingTop: "50px",
    paddingBottom: "50px"
  },
  Header: {
    backgroundColor: theme.palette.secondary.dark
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query getImages {
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
        obj.cols = galleryItem.cols;
      }
    });
    acc.push(obj);
    return acc;
  }, []);

  const imageDataLength = imageData.length;

  const openLightBoxHandler = index => {
    setLightboxIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <Fragment>
      <section className={classes.Banner}>
        <Wrapper>
          <Typography
            variant="h1"
            color="textSecondary"
            className={classes.Title}
          >
            Фотогалерея
            <Divider className={classes.Divider} />
          </Typography>
        </Wrapper>
      </section>
      <section className={classes.Content}>
        <Wrapper>
          <GridList cols={matches ? 1 : 3} cellHeight={250}>
            <GridListTile
              key="Subheader"
              cols={matches ? 1 : 3}
              style={{ height: "auto" }}
            >
              <ListSubheader component="div" className={classes.Header}>
                Мы в деле
              </ListSubheader>
            </GridListTile>
            {imageData.map((tile, index) => (
              <GridListTile
                key={tile.name}
                cols={matches ? 1 : tile.cols || 1}
                onClick={() => openLightBoxHandler(index)}
              >
                <img src={tile.src} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Wrapper>
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
      </section>
    </Fragment>
  );
};
