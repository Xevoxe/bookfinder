import React, {Component} from 'react';

const FetchSearch = WrappedComponent =>{
    return class SearchApi extends Component {
        constructor(props){
            super(props);
            this.state = {
                search: props.search,
                loading: true,
                volumes: null
            }
        }

    componentDidMount(){
        //Fetch Data from API
       this.fetchData();
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.search !== this.state.search){
            this.fetchData();
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.search != prevState.search){
            return {search: nextProps.search,
                    loading: true};
        }
        else
        return null;
    }

    fetchData(){
        console.log("Fetching Data");
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&projection=lite`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        volumes: result.items
                    });
            }
            )
    }
    

    render(){
        return (
            <div>
                {this.state.loading ? <RenderLoading />: <WrappedComponent volumes={this.state.volumes} />}
            </div>
        )
    }
}
}

//Loading Spinner
const RenderLoading = ()=>{
    console.log("Loading");
    return <div>Loading!</div>
}

    

export default FetchSearch;