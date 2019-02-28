import React from 'react';
import FetchSearch from '../containers/FetchSearch';

const ResultsView = (props) =>
{
    console.log("ResultsView");
    console.log(props);
    return (
        <div>Search Results go here!</div>
    )
}

const Results = FetchSearch(ResultsView)

export default Results;