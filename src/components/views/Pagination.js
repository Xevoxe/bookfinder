import React from "react";
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Pagination = (props) =>{
    return (
           <RenderPagination volumes={props.volumes} tabs={10} onPageChange={props.onPageChange} className={props.className} maxSet={props.maxSet} set={props.set} currentSet={props.currentSet} pagination={props.pagination} />  
    )
}

export default Pagination

const PageButton = (props) =>
{
    return(
        <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label={`Page ${props.index}`}
            value="props.index"
            onClick={(evt)=>{props.onPageChange(evt,props.index)}}
            >
            {props.index}
        </Fab>
    )
}

const RenderPagination = (props) =>
{
    const {pagination, maxSet,set,volumes} = props;
    console.log(volumes);
    let pages = [];
    let startIndex = set * 10;
    pages.push(
        <Fab component="button" size="medium" color="secondary" aria-label="Previous" value="previous" onClick={(evt)=>{props.onPageChange(evt,"previous")}} >
            <RemoveIcon  />
        </Fab>);
    for(let i = startIndex ; i < props.tabs+startIndex ; i++){
        console.log(volumes);
        if((pagination/12) != i && volumes >=12)
            pages.push(<PageButton index={i} onPageChange={props.onPageChange}/>);
    }
    if(volumes >=12){
        pages.push(
            <Fab size="medium" color="secondary" aria-label="Next" onClick={(evt)=>{props.onPageChange(evt,"next")}} >
                <AddIcon />
            </Fab>);
    }
    return (
        <div className={props.className}>{pages}</div>
    )

}