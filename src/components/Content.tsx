import { useState, useEffect } from "react";
import "../styles/styles.css";
import Cards from "./Cards/Cards";

export default function Content() {
  // useEffect(() => {
  //     console.log(fetch('http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=20241018GTR6U5N7EKKELLFUWGZGOG'))
  // }, []);

    const [isClicked, setIsClicked] = useState(false)
    
    const handleClick = () => {
        setIsClicked(!isClicked)
    }

  return (
    <div>
      <h1 className="title mt-[6.5rem]">Plantic</h1>
      <div className="flex flex-row mt-5">
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
        <button className={`button ${isClicked ? 'button-clicked' : ''}`} onClick={handleClick}>버튼</button>
      </div>

      <hr className="hr" />

      <div className="grid grid-cols-3 gap-16 justify-between mt-11">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
