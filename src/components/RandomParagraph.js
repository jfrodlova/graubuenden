import paragraphs from "../data";
import { useState } from "react";
import { Button } from "react-bootstrap";

const RandomParagraph = () => {
  
  const [randomParagraph, setRandomParagraph] = useState("");
  const [index, setIndex] = useState(null);

  const handleSubmit = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const newIndex = (index === randomIndex) ?
     (index + 1) % paragraphs.length : randomIndex;
    const paragraphText = paragraphs[newIndex].text;
    setIndex(newIndex)
    setRandomParagraph(paragraphText);
  };

  return (
    <div>
      <Button
        className="primary-button"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Give me a reason
      </Button>
      <h4>{randomParagraph}</h4>
    </div>
  );
};

export default RandomParagraph;
