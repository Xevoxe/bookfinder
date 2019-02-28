import React, {Component, Fragment} from "react";
import BookCard from "../views/BookCard";
import SearchBook from '../containers/SearchBook';
import Results from '../views/ResultsView';

class Main extends Component{
   
    constructor(props){
        super(props);

        this.state = ({
            search: null
        })

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchRequest){
        this.setState({
            search: searchRequest
        });
    }
    
    render(){
        const mainStyle={
            width: '150px',
        };
        console.log(this.state.search);
        return (
            <div>
                <SearchBook onSearch={this.handleSearch} />
                {this.state.search ? <Results search={this.state.search} /> : null}
            </div>);
    }
}

export default Main;