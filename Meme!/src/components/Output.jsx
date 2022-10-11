function Output(props) {
    const {image, topText, bottomText} = props;
    return(
        

        <section className="section is-medium pt-0 pb-6 has-text-centered" >
            <article className="message is-medium" >
                <div className="message-body" id="output">
                    <div className="meme">
                        <img id= "img" src= {image} width="800rem" height="auto"/>
                        <h2 id="top-text" className="top">
                            {topText}
                        </h2>
                        <h2 id="bottom-text" className="bottom">
                            {bottomText}
                        </h2>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Output