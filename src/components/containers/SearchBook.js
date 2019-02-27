import React from 'react';
import {Component} from 'react';
import SearchInput from '../views/SearchInput';


class SearchBook extends Component{
    constructor(props){
        super(props);

        this.state = ({
            searchValue: ""
        })

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        let search = evt.target.value;
        this.setState((state,props) => ({
            searchValue: search
        }));
    }

    handleSubmit (evt){
        evt.preventDefault();
        console.log(evt.target);
        this.props.onSearch(this.state.searchValue);
    }

    render(){
        return(
            <div>
                <SearchInput onSubmit={this.handleSubmit} onChange= {this.handleChange}/>
            </div>
        )
    }
}

export default SearchBook;