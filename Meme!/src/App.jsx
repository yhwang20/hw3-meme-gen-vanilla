import Header from "./components/Header";
import Footer from "./components/Footer";
import Control from "./components/Control";
import Output from "./components/Output";
import { useState } from 'react';
import {
  generateMeme,
  fetchMemes
} from "./api/index.js";
function App() {
  const [topText, setTopText] = useState(""); //for Output
  const [bottomText, setBottomText] = useState(""); //for Output
  const [image, setImage] = useState(""); //for Output


  const produce = async (texts) => {
    try {
      const data = await fetchMemes();
      const images = await generateMeme(data.data.memes);
      if (images != null) {
        setImage(images.url);
      }
      console.log();
      setTopText(texts[0])
      setBottomText(texts[1])
    } catch (err){
      console.log(err);
    }
    
  }

  return (
    <>
      <Header />

      <Control 
        produce = {produce}
        //topText = {topText}
        //setTopText = {setTopText}
      /> 

      <Output 
        image = {image}
        topText = {topText}
        bottomText = {bottomText}
      />

      <Footer />  
    </>
  )
}

export default App;