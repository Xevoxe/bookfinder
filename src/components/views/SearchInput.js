import React from 'react';
import {Fragment} from 'react';
import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchInput = (props) =>{
    const {onSubmit, onChange} = props;

    return(
        <form onSubmit={onSubmit}>
            <TextField
                onChange={onChange}
                type ="search"
                style = {{minWidth:"300px"}}
                margin="normal"
                variant="outlined"
                label="Search by book title or Author"
            />
        </form>
    )

}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default SearchInput;