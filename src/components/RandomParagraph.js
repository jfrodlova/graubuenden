import paragraphs from "../data"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"


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
        <Button onClick={selectRandomParagraph}>Give me a reason</Button>
       {/*  {paragraphs.map((oneParagraph) => {
            const {id, text} = oneParagraph
            return <p key={id}>{text}</p>
        }
        )}
        <p>{randomParagraph}</p> */}
      </div>
};

export default RandomParagraph