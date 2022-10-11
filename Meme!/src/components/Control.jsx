import Button from "./Button";
import { useState } from "react";
import Search from "./Search";
function Control(props) {

    const {produce} = props;
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const handleClick = () => {
        const texts = [topText, bottomText];
        produce(texts);
    }

    const handleOnChange = async (text) => {
        setTopText(text);
    }

    const handleOnChangeBot = async (text) => {
        setBottomText(text);
    }

    
    return (
        <section className="section">
            <div className="field has-addons">
                <div className="control is-expanded">
                    <Search 
                        topText = {topText}
                        handleOnChange = {handleOnChange}
                        bottomText = {bottomText}
                        handleOnChangeBot = {handleOnChangeBot}
                    />
                </div>
            </div>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <Button  
                        onClick = {handleClick}
                        id={"Go!"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Control;