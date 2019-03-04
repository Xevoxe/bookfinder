import React, {Component} from 'react';

const FetchSearch = WrappedComponent =>{
    return class SearchApi extends Component {
        constructor(props){
            super(props);
            this.state = {
                search: props.search,
                volumes: null,
                errors: null
            }
        }

    componentDidMount(){
        //Fetch Data from API
     //  this.fetchData();
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.search !== this.state.search){
            this.fetchData();
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.search !== prevState.search){
            return {search: nextProps.search,
                    volumes: [],
                    errors: null};
        }
        else
        return null;
    }

    fetchData(){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&projection=lite`)//https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&projection=lite
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
                    this.setState({
                        loading: false,
                        volumes: result.items
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
            <div>
                {<WrappedComponent volumes={this.state.volumes} errors={this.state.errors}/>}
            </div>
        )
    }
}
}


export default FetchSearch;