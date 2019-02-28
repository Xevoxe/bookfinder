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
        console.log(this.state.search);
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
        console.log(this.state.volumes);
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