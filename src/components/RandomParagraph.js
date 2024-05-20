import data from "../data"
import { useState, useEffect } from "react"

const RandomParagraph = (props) => {
    const [randomParagraph, setRandomParagraph] = useState('');

    useEffect(() => {
      selectRandomParagraph();
    }, []);
  
    const selectRandomParagraph = () => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomParagraph(data[randomIndex]);
    };
  
    return <div>
          {/* <button onClick={selectRandomParagraph}>
            Generate Random Paragraph
          </button>
          {data.map((item) => (
            <p key={props.id}>{props.text}</p>
          ))}
          <p>{randomParagraph}</p> */}
        </div>
}

export default RandomParagraph
