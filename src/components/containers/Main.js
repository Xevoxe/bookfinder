import React, {Component, Fragment} from "react";
import SearchBook from '../containers/SearchBook';
import Results from '../views/ResultsView';
import { Typography} from "@material-ui/core";
import Pagination from '../views/Pagination';


class Main extends Component{
   
    constructor(props){
        super(props);

        this.state = ({
            search: "",
            pagination: 0,
            set: 0,
        })

        this.handleSearch = this.handleSearch.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleSearch(searchRequest){
        this.setState({
            search: searchRequest
        });
    }

    handlePageChange(evt,button){
        let newSet = this.state.set;

        if(button === "next"){
            this.setState((state)=>({
                set: state.set + 1,
                pagination: (state.set+1)*120,
            }))
        }else if(button === "previous"){
                console.log(`Pagination ${this.state.pagination}`);
                if(this.state.pagination >= 120){
                    this.setState((state)=>({
                        set: state.set - 1,
                        pagination: (state.set-1)*120,
                    }))
                }
            }else{
                this.setState({
                    pagination: button*12,
                })
            }
            console.log(`Pagination ${this.state.pagination}`);
    }

    
    render(){
        return (
            <div>
                <Typography fontWeight={600} component="h1" variant="h1" color="textSecondary" >
                    BookFinder!
                </Typography>
                <SearchBook onSearch={this.handleSearch} />
                <Results search={this.state.search} pagination={this.state.pagination} set={this.state.set} onPageChange={this.handlePageChange}/> 
                
            </div>);
    }
}

export default Main;