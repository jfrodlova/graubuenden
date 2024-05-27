import paragraphs from "../data"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

const randomIndex = Math.floor(Math.random() * 3)
const paragraphText = paragraphs[randomIndex].text
//const {id, text} = oneParagraph

const RandomParagraph = () => {
    const [randomParagraph, setRandomParagraph] = useState('Graubünden, located in Switzerland, is a beautiful destination known for its stunning landscapes, charming villages, and delicious cuisine.');

    useEffect(() => {
      selectRandomParagraph();
    }, []);

  
    const selectRandomParagraph = () => {
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      setRandomParagraph(paragraphs[randomIndex]);
    };
  
    return <div>
        <Button className="primary-button" onClick={ () => selectRandomParagraph()}>Give me a reason</Button>
        <h4>{paragraphText}
        </h4>
      </div>
};

export default RandomParagraph