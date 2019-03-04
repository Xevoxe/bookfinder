import React, {Component, Fragment} from "react";
import BookCard from "../views/BookCard";
import SearchBook from '../containers/SearchBook';
import Results from '../views/ResultsView';
import { Typography, withStyles } from "@material-ui/core";


class Main extends Component{
   
    constructor(props){
        super(props);

        this.state = ({
            search: ""
        })

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchRequest){
        this.setState({
            search: searchRequest
        });
    }
    
    render(){
        return (
            <div>
                <Typography fontWeight={600} component="h1" variant="h1" color="textSecondary" >
                    BookFinder!
                </Typography>
                <SearchBook onSearch={this.handleSearch} />
                <Results search={this.state.search} /> 
            </div>);
    }
}

export default Main;