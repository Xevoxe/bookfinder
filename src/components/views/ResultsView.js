import React from 'react';
import FetchSearch from '../containers/FetchSearch';
import BookCard from '../views/BookCard';
import {withStyles, FormHelperText} from '@material-ui/core';

const styles = theme => ({
    resultsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: '0 10%',
       
    },
    bookCard: {
        display:'flex',
        margin: '15px 0px',
    }
});

const ResultsView = (props) =>
{
    const {classes, volumes} = props;
    
    return (
        <div className={classes.resultsContainer}>
            {volumes.map((book)=>{
                return (
                    <div className={classes.bookCard}>
                    <BookCard
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        authors={book.volumeInfo.authors}
                        publisher={book.volumeInfo.publisher}
                        title={book.volumeInfo.title}
                        subTitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                    />
                    </div>
                )
            })
            }
        </div>
    )
}
const withStylesResults = withStyles(styles)(ResultsView);
const Results = FetchSearch(withStylesResults)

export default Results;