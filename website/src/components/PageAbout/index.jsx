import React, { Fragment } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Typography, Divider, GridList, GridListTile } from '@material-ui/core'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Wrapper from 'components/Wrapper'
import Gallery from 'components/Gallery'
import bannerImage from 'assets/images/main/bg_7.jpg'
import aboutBgImg1 from 'assets/images/main/bg_8.jpg'
import aboutBgImg2 from 'assets/images/main/bg_9.jpg'

const useStyles = makeStyles(theme => ({
    Banner: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${ bannerImage })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 90%',
        backgroundSize: 'cover',
        height: "350px",
    },
    Title: {
        paddingTop: '230px',
        [ theme.breakpoints.down('xs') ]: {
            fontSize: '30px'
        }
    },
    Divider: {
        backgroundColor: theme.palette.secondary.dark,
        marginTop: '20px',
        width: '350px'
    },
    Content: {
        paddingTop: '100px',
        paddingBottom: '100px',
    },

}))

export default () => {
    const theme = useTheme()
    const classes = useStyles()
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Fragment>
            <section className={ classes.Banner }>
                <Wrapper>
                    <Typography variant="h1" color="textSecondary" className={ classes.Title }>О нас
                        <Divider className={ classes.Divider } />
                    </Typography>
                </Wrapper>
            </section>
            <section className={ classes.Content }>
                <Wrapper>
                    <GridList cols={ matches ? 1 : 2 } cellHeight={ 400 } spacing={50}>
                        <GridListTile  cols={ 1 } >
                           <img src={aboutBgImg1} alt="Картинка чертеж"/>
                        </GridListTile>
                        <GridListTile  cols={1} >                        
                           <Typography variant="h5" color="secondary" gutterBottom>WELCOME TO THE MOTORS</Typography>
                           <Typography variant="h6" gutterBottom color="primary">Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.</Typography>
                           <Typography variant="body1" gutterBottom>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.</Typography>
                           <Typography variant="caption ">— MIKEY DIOKLES, President of Motors</Typography>
                        </GridListTile>
                        <GridListTile  cols={1} >
                        <Typography variant="h5" color="secondary" gutterBottom>WELCOME TO THE MOTORS</Typography>
                           <Typography variant="h6" gutterBottom color="primary">Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.</Typography>
                           <Typography variant="body1" gutterBottom>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.</Typography>
                           <Typography variant="caption ">— MIKEY DIOKLES, President of Motors</Typography>
                        </GridListTile>
                        <GridListTile  cols={1} >
                           <img src={aboutBgImg2} alt="Картинка спецтехник"/>
                        </GridListTile>

                    </GridList>
                </Wrapper>
            </section>
            <Gallery/>            
        </Fragment>
    )
}