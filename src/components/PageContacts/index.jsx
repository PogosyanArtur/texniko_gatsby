import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/styles'
import {Typography,Divider, Grid, List, ListItem, ListItemIcon } from '@material-ui/core'
import {LocationOn  as IconLocationOn, MailOutline as IconMailOutline, Phone as IconPhone } from '@material-ui/icons'
import Wrapper from 'components/Wrapper'
import contactBanner from 'assets/images/main/contactBanner.jpg'
import contactsData from 'data/contactsData'

const useStyles = makeStyles(theme => ({
    Banner: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${contactBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 90%',
        height: "350px",
    },
    Title:{
        paddingTop: '230px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'30px'
        }
    },
    Divider:{
        backgroundColor: theme.palette.secondary.dark,
        marginTop: '20px',
        width:'350px'
    },
    Content:{
        paddingTop:'100px',
        paddingBottom:'100px',
    },
    List:{
        marginBottom:'30px'
    },
    Icon:{
        fontSize:'45px',
        color:theme.palette.secondary.dark
    },
    ListItemText:{
        color:theme.palette.gray[600]
    },
    ListHeader:{
        padding:'15px',
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
    },
    Map:{
        width:"100%",
        height:"500px",
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <Fragment>
            <section className={ classes.Banner }>
                <Wrapper>
                    <Typography variant="h1" color="textSecondary" className={classes.Title}>Наши контакты
                        <Divider className={classes.Divider}/>
                    </Typography>
                </Wrapper>
            </section>
            <section className={classes.Content}>
                <Wrapper>
                    <Grid container spacing={16}>
                        <Grid item xs={12} lg={4}>
                            <Typography className={classes.ListHeader} variant="h4">Контакты</Typography>
                            <List className={classes.List}>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <IconLocationOn className={classes.Icon}/>
                                    </ListItemIcon>
                                    <Grid container direction="column">
                                        <Typography variant="h5" color="secondary" gutterBottom>Адресс</Typography>
                                        <Typography className={classes.ListItemText}>{contactsData.location1.name}</Typography>
                                    </Grid>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <IconMailOutline className={classes.Icon}/>
                                    </ListItemIcon>
                                    <Grid container  direction="column">
                                        <Typography variant="h5" color="secondary" gutterBottom>E-mail</Typography>
                                        <Typography component="a" href={contactsData.mail1.href} className={classes.ListItemText}> {contactsData.mail1.name} </Typography>
                                    </Grid>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <IconPhone className={classes.Icon}/>
                                    </ListItemIcon>
                                    <Grid container direction="column">
                                        <Typography variant="h5" color="secondary" gutterBottom>Телефон</Typography>
                                        <Typography component="a" href={contactsData.telephone1.href}  className={classes.ListItemText}>{contactsData.telephone1.name}</Typography>
                                    </Grid>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <iframe 
                                title="Карта" 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3AS_-cqA64KLbnyKZqXl7sMK7pokOmZWGw&amp;source=constructor" 
                                frameBorder="0"
                                className={classes.Map}></iframe>
                        </Grid>
                    </Grid>
                </Wrapper>
            </section>
        </Fragment>
    )
}