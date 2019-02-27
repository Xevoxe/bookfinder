import React from "react";
import {Card,CardMedia,Grid, Typography,Paper,Button, withStyles} from "@material-ui/core";
import { wrap } from "module";

const styles = theme => ({
    container: {
        display: 'flex',
        flexFlow: 'wrap',
        flexDirection: 'column',
        maxWidth: '500px',
        minWidth: '300px',
        marginTop:'50px',
        overflow: 'visible',
        padding:'0px 20px',
        [theme.breakpoints.up('500')]: {
            flexDirection: 'row',
        },
    },
    bookCover: {
        width: '175px',
        margin: 'auto',
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

    const {classes} = props;
 
    return ( 
            <Card className={classes.container}> 
                <Paper className={classes.bookCover} elevation={10}>
                    <CardMedia
                        component="img"
                        image="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
                        title="Hunger Games"
                    />
                </Paper>
                <div className={classes.contentDetails}>
                    <Typography  fontWeight={600} component="h2" variant="h6" color="textSecondary" gutterBottom>
                        Harry Potter and the Cursed Child- Parts One and Two(Special Rehearsal Edition)
                    </Typography>
                    <Typography component="h3" variant="subtitle1" color="textSecondary">
                        By: No authors found
                    </Typography>
                    <Typography component="h4" variant="subtitle1" color="textSecondary" gutterBottom>
                        Published By: Pottermore Publishing
                    </Typography>
                    <Button className={classes.bookButton} variant="contained" color="primary">
                        See this Book
                    </Button>
                </div>
            </Card>
    )
}

export default withStyles(styles)(BookCard);