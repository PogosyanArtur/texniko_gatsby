import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Card, CardMedia, CardContent, Typography, MobileStepper,IconButton  } from '@material-ui/core'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import Carousel from 'nuka-carousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {sideImagesData } from 'data'
import Wrapper from 'components/Wrapper'

const useStyles = makeStyles(theme => ({
    Title:{
        color:theme.palette.common.white,
        marginBottom:theme.spacing.unit * 4
    },
    GalleryContainer: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing.unit * 5,
    },
    Card: {
        minWidth: '300px',
    },
    CardMedia: {
        height: '250px'
    },
    CardMediaContainer:{
        position:'relative'
    },
    CardMediaCover:{
        position:'absolute',
        top:0,
        left:0,
        height:'100%',
        width:'100%',
        backgroundColor:theme.palette.primary.light,
        opacity: 0.4
    },
    CardTitle: {
        color: theme.palette.primary.main
    },
    MobileStepper: {
        justifyContent:'center',
        backgroundColor: theme.palette.primary.main,
    },
    MobileStepperDotActive: {
        backgroundColor: theme.palette.secondary.main
    },
    IconButton:{
        backgroundColor: 'transparent',
        transition:'all 0.2s',
        padding:theme.spacing.unit,
        margin:theme.spacing.unit,
        borderRadius: '5px',
        border:`2px solid transparent`,
        '&:hover':{
            color:theme.palette.secondary.main,
            backgroundColor:'transparent',
            borderRadius: '5px',
            border:`2px solid ${theme.palette.secondary.main}`
        }
    },
    MobileStepperDot:{
        width:'6px',
        height:'6px',
    },
    LightBox:{
        zIndex:5000
    }
}))

const imagesData = sideImagesData
const imagesDataLength = imagesData.length
const sideImagesDataLength = sideImagesData.length - 1
export default () => {
    const classes = useStyles()
    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const xlUp = useMediaQuery(theme.breakpoints.up('xl'))
    let [ currentIndex, setCurrentIndex ] = useState(0)
    let [ lightboxIsOpen, setLightboxIsOpen ] = useState(false)
    let [ photoIndex, setPhotoIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
    };
    const handleBack = () => {
        setCurrentIndex(currentIndex - 1)
    };
    const LightboxOpenHandler = (index)=>{
        setLightboxIsOpen(true)
        setPhotoIndex(index)
    }
    let SlideToShowNumber = 1;
    if (mdUp)
    {
        SlideToShowNumber = 2;
    }
    if (xlUp)
    {
        SlideToShowNumber = 3;
    }
    
    return (
        <section className={ classes.GalleryContainer }>
            <Wrapper>
                <Typography className={classes.Title} variant="h2" align="center" color="textSecondary">Фотогалерея</Typography>
                <Carousel
                    slideIndex={ currentIndex }
                    afterSlide={ index => currentIndex!== index ? setCurrentIndex(index) : null }
                    slidesToShow={ SlideToShowNumber }
                    swiping 
                    withoutControls
                    cellAlign="left"
                    cellSpacing={ 20 }>
                    {
                        sideImagesData.map((item, index) => (
                            <Card 
                                key={ item } 
                                className={ classes.Card } 
                                elevation={ 0 }  
                                onClick={()=>LightboxOpenHandler(index)}>
                            <div className={classes.CardMediaContainer}>
                                <CardMedia 
                                    className={ classes.CardMedia } 
                                    image={require(`static/images/${item}.jpg`)} />                                
                                    <div className={classes.CardMediaCover}></div>
                            </div>
                            <CardContent>
                                    <Typography variant="body1" component="h4" className={ classes.CardTitle }>Трактор JSb 3 при  разработке грунта, объект Москва Сити </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Carousel>
                <MobileStepper
                    variant="dots"
                    steps={ sideImagesDataLength + 1 }
                    activeStep={ currentIndex }
                    position="static"
                    className={ classes.MobileStepper }
                    classes={ { dotActive: classes.MobileStepperDotActive, dot:classes.MobileStepperDot } }
                    nextButton={
                        <IconButton disableRipple className={classes.IconButton} size="small" onClick={ handleNext } disabled={ currentIndex === sideImagesDataLength }>
                            <KeyboardArrowRight fontSize="small"/>
                        </IconButton>
                    }
                    backButton={
                        <IconButton disableRipple className={classes.IconButton} size="small" onClick={ handleBack } disabled={ currentIndex === 0 }>
                            <KeyboardArrowLeft fontSize="small"/>
                        </IconButton>
                    }
                />
                {lightboxIsOpen &&(
                     <Lightbox
                     mainSrc={require(`static/images/${imagesData[photoIndex]}.jpg`)}
                     nextSrc={require(`static/images/${imagesData[(photoIndex + 1) % imagesDataLength]}.jpg`) }
                     prevSrc={require(`static/images/${imagesData[(photoIndex + imagesDataLength - 1) % imagesDataLength]}.jpg`)}
                     onCloseRequest={() => setLightboxIsOpen(false)}
                     onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesDataLength - 1) % imagesDataLength)
                     }
                     onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesDataLength)         
                     }
                     reactModalStyle={  {overlay : {zIndex:theme.zIndex.lightBox}}}
                   />
                )}
            </Wrapper>
        </section>
    )
}