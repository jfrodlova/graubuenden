// import paragraphs from "../data";
import { useState } from "react";
import { Button } from "react-bootstrap";


const RandomParagraph = () => {
  const paragraphs = [
    {
        id:1,
        text: "Connect with nature. Majestic mountains, crystal-clear lakes, lush forests - true paradise for nature lovers."
    },
    {
        id:2,
        text: "Enjoy skiing in winter, hiking and mountain biking in summer and much more. Graubünden has a lot to offer to sport enthusiasts!"
    },
    {
        id: 3,
        text: "Unwind in a luxury spa resort, taste a local delicious cuisine or just stroll in beautiful landscape."
    }, 
    {
        id: 4,
        text: "Graubünden, located in Switzerland, is a beautiful destination known for its stunning landscapes, charming villages, and delicious cuisine."
    }
]

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
