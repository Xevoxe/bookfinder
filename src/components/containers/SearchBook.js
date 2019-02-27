import React from 'react';
import {Component} from 'react';
import SearchInput from '../views/SearchInput';


class SearchBook extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchInput />
            </div>
        )
    }
}

export default SearchBook;