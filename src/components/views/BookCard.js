import React from "react";
import {Card,CardMedia,Grid, Typography,Paper,Button, withStyles} from "@material-ui/core";
import { wrap } from "module";

const styles = theme => ({
    container: {
        display: 'flex',
        flexFlow: 'wrap',
        flexDirection: 'column',
        minWidth: '375px',
        maxWidth: '375px',
        marginTop:'50px',
        overflow: 'visible',
        padding:'0px 20px',
        alignItems: 'flex-start',
        [theme.breakpoints.up('500')]: {
            flexDirection: 'row',
        },
    },
    bookCover: {
        width: '150px',
        transform: 'translate(0px, -50px)',
        
    },
    contentDetails: {
        transform:'translate(0px, -25px)',
        [theme.breakpoints.up('500')]: {
            flex: '2',
            padding:'20px',
            transform: 'translate(0px,0px)'
        },
    },
    bookButton: {
        width:'100%',
        marginTop: '10px',
    },
});

const BookCard = (props) => {

    const {classes, image, authors, publisher, title, subTitle, link} = props;
 
    return ( 
            <Card className={classes.container}> 
                <Paper className={classes.bookCover} elevation={10}>
                    <CardMedia
                        component="img"
                        image={image}
                        title="Hunger Games"
                    />
                </Paper>
                <div className={classes.contentDetails}>
                    <Typography  fontWeight={600} component="h2" variant="h6" color="textSecondary">
                       {title}
                    </Typography>
                    <Typography component="h3" variant="subtitle1" color="textSecondary">
                        By: {authors}
                    </Typography>
                    <Typography component="h4" variant="subtitle1" color="textSecondary" gutterBottom>
                        Published By: {publisher}
                    </Typography>
                    <Button className={classes.bookButton} variant="contained" color="primary" href={link}>
                        See this Book
                    </Button>
                </div>
            </Card>
    )
}

export default withStyles(styles)(BookCard);