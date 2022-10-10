import Button from "./Button";
import { useState } from "react";
import Search from "./Search";
function Control(props) {

    const {produce, topText} = props;

    const handleClick = () => {
        produce();
    }



    
    return (
        <section className="section">
            <div className="field has-addons">
                <div className="control is-expanded">
                    <Search 
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