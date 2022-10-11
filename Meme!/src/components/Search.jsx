import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Search(props) {
    const {topText, handleOnChange, bottomText, handleOnChangeBot} = props;

    const handleOnChange2 = (event) => {
        handleOnChange(event.target.value);
    }

    const handleOnChange3 = (event) => {
        handleOnChangeBot(event.target.value);
    }

    return(
        <Form>
            <Form.Control 
                className="input is-large is-fullwidth is-family-monospace"
                id="top-input"
                placeholder = "Top text"
                value = { topText }
                type="text"
                onChange = {handleOnChange2}
            />
            <Form.Control 
                className="input is-large is-fullwidth is-family-monospace"
                id="bottom-input"
                placeholder = "Bottom text"
                value = { bottomText }
                type="text"
                onChange = {handleOnChange3}
            />
        </Form> 
    )
}

export default Search;