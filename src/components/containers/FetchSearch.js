import React, {Component} from 'react';

const FetchSearch = WrappedComponent =>{
    return class SearchApi extends Component {
        constructor(props){
            super(props);
            this.state = {
                search: props.search,
                volumes: null,
                errors: null,
                totalItems: 0,
                pagination: props.pagination
            }
        }

    componentDidUpdate(prevProps){
        if(prevProps.search !== this.state.search || prevProps.pagination !== this.state.pagination){
            this.fetchData(this.props.pagination);
        }
 
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.search !== prevState.search){
            return {search: nextProps.search,
                    volumes: [],
                    errors: null};
        }
        else
        if(nextProps.pagination !== prevState.pagination){
            console.log(`PrevState: ${prevState.totalItems}`);
            return {
                pagination: nextProps.pagination,
            };
        }
        else
        return null;
    }

    fetchData(pagination){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&startIndex=${pagination}&maxResults=12&projection=lite`)//https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&projection=lite
            .then(res =>{
                if(res.ok){
                    return res.json();
                }else
                    return Promise.reject({
                        status: res.status,
                        statusText: Response.statusText
                    }); 
            })
            .then(
                (result) => {
                    console.log(pagination);
                    console.log(result);
                    this.setState({
                        loading: false,
                        volumes: result.items,
                        totalItems: result.totalItems,

                    });
            }
            )
            .catch(error => {
                this.setState(()=>({
                    errors: error
                }));
                console.log(error);
            })
    }
    

    render(){
        return (      
                <WrappedComponent volumes={this.state.volumes} errors={this.state.errors} totalItems={this.state.totalItems} {...this.props}/>
        )
    }
}
}


export default FetchSearch;