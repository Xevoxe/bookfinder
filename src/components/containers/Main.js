import React, {Component, Fragment} from "react";
import BookCard from "../views/BookCard";
import SearchBook from '../containers/SearchBook';

class Main extends Component{
   
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchRequest){
        console.log("Handling Search Term" + searchRequest);
    }
    
    render(){
        const mainStyle={
            width: '150px',
        };

        return (
            <div>
                <SearchBook onSearch={this.handleSearch} />
                <BookCard />
            </div>);
    }
}

export default Main;