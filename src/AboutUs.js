import React from 'react';
import teamimage from './images/softeng.jpg';
import logo from './logo.png';
import { Card, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 250,
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    }
}));

function AboutUs() {
    const classes = useStyles();
    return (
        <Card className='about-card'>
            <CardMedia
                component="img"
                className={classes.media}
                image={teamimage}
                title="Our team"
            />
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Who are we
                </Typography>
            </Container>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card>
    );
}

export default AboutUs;