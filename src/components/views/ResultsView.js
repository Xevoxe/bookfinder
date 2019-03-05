import React from 'react';
import FetchSearch from '../containers/FetchSearch';
import BookCard from '../views/BookCard';
import {withStyles, CircularProgress, Typography} from '@material-ui/core';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import stockImage from '../../images/no-image-icon-15.png';
import Pagination from '../views/Pagination';

const styles = theme => ({
    bookContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: '0 5%',
        [theme.breakpoints.down('500')]: {
            flexDirection:"column",
        },
       
    },
    bookCard: {
        display:'flex',
        margin: '15px 0px',
    },
    loading: {
        margin:"20%",
    },
    emptyResults:{
        display:"inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
    icon: {
        margin:"auto",
    },
    pagination: {
        display:'inline-flex',
        alignItems: 'center',
    },
    resultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    }
    
});

const ResultsView = (props) =>
{
    const {classes, volumes, errors, totalItems,pagination} = props;
    return (
        <div>
            {errors ? 
                <div className={classes.emptyResults}>
                <SentimentDissatisfied color="primary" className={classes.icon} />
                <Typography fontWeight={600} component="h2" variant="h6" color="textSecondary">
                    There was a problem searching for your book.  Please try again later.
                </Typography>
                </div>
            : !volumes ?
                <div className={classes.emptyResults}>
                    <SentimentDissatisfied color="primary" className={classes.icon} />
                    <Typography fontWeight={600} component="h2" variant="h6" color="textSecondary">
                        Nothing here - Try searching for a book or Author.
                    </Typography>
                </div>
                : volumes.length > 0 
                ? 
                <div className={classes.resultsContainer}>
                    <Pagination className={classes.pagination} set={props.set} volumes={volumes.length} pagination={pagination} onPageChange={props.onPageChange}/>
                    <div className={classes.bookContainer}> 
                    {volumes.map((book,index)=>{
                        return (
                            <div key={index} className={classes.bookCard}>
                            <BookCard
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : stockImage }
                                authors={book.volumeInfo.authors}
                                publisher={book.volumeInfo.publisher}
                                title={book.volumeInfo.title}
                                subTitle={book.volumeInfo.subtitle}
                                link={book.volumeInfo.infoLink}
                            />
                            </div>
                        )})}
                    </div>
                </div>
                : <CircularProgress size={100} className={classes.loading}/>
            }
        </div>
    )
}

const withStylesResults = withStyles(styles)(ResultsView);
const Results = FetchSearch(withStylesResults)

export default Results;