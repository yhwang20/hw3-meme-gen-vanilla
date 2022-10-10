import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Search(props) {
    const [topText, setTopText] = useState("");

    const handleOnChange = (event) => {
        setTopText(event.target.value);
        //console.log(topText);
    }
    

    return(
        <Form>
            <Form.Control 
                className="input is-large is-fullwidth is-family-monospace"
                id="top-input"
                placeholder="Top text"
                value = { topText }
                type="text"
                onChange = {handleOnChange}
            />
        </Form> 
    )
}

export default Search;