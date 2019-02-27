import React, {Component, Fragment} from "react";
import BookCard from "../views/BookCard";
import SearchBook from '../containers/SearchBook';

class Main extends Component{
   
    constructor(props){
        super(props);
    }
    
    render(){
        const mainStyle={
            width: '150px',
        };

        return (
            <div>
                <SearchBook />
                <BookCard />
            </div>);
    }
}

export default Main;