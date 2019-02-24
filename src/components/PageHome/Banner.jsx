import React, { Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/styles';
import sideImagesData from '../../data/sideImagesData'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles( theme=>({
  Slide: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 bottom',
    height: "300px",
    [theme.breakpoints.up('md')]: {
      height: "400px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "500px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "600px",
    },
  }
}))

const MyComponent = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <AutoPlaySwipeableViews interval={5000}>
        {
          sideImagesData.map((src, i) => (
            <div key={ src } className={ classes.Slide } style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ require(`static/images/${ src }.jpg`) })` } }>
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
    </Fragment>
  )
}
export default MyComponent;

