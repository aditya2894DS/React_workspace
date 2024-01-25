import React, { useEffect, useRef, useState } from "react";
import "../styles/MultiSelect.css";

function Square({ data, getClickedId, clickedArrState }) {
  const [clickArrState, setClickArrState] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const myRef = useRef(data)

  function handleClick(e) {
    let id = e.target.id;
    getClickedId(id);
  }

  useEffect(() => {
    setClickArrState(clickedArrState);
  }, [clickedArrState]);

  useEffect(() => {
    // console.log("sq", clickArrState);
    // console.log(myRef.current);
    if (clickArrState.includes(myRef.current.toString())) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [clickArrState]);  

  return (
    <>
      <div
        className={`square ${highlight ? "active" : " "}`}
        id={data}
        onClick={handleClick}
      ></div>
    </>
  );
}

let sq_arr = Array.from({ length: 4 }, (item, index) => index + 1);

export default function MultiSelect() {
  const arr_ref = useRef(sq_arr);
  const [clickedArr, setClickedArr] = useState([]);

  function fillClickedArr(id) {
    setClickedArr([...clickedArr, id]);
  }

    useEffect(() => {
      let tempArr = clickedArr;
      // length = 2
      // check if same button are not clicked
      if (tempArr.length === 2) {
        if (tempArr[0] === tempArr[1]) {
          tempArr.length = 0;
          setClickedArr(tempArr);
        }
      } else if (tempArr.length === 3) {
        // length = 3
        if (tempArr[0] === tempArr[2]) {
          let temp2 = tempArr.filter((item) => item !== tempArr[0]);
          setClickedArr(temp2);
        } else if (tempArr[1] === tempArr[2]) {
          let temp2 = tempArr.filter((item) => item !== tempArr[1]);
          setClickedArr(temp2);
        } else if (tempArr[0] !== tempArr[2]) {
          tempArr.shift();

          setClickedArr(tempArr);
          // console.log(temp);
        }
      }
      // console.log(clickedArr)
    }, [clickedArr]);

  return (
    <>
      <div className="component-container">
        <div className="square-container">
          {arr_ref.current.map((item) => (
            <Square
              key={item}
              data={item}
              getClickedId={fillClickedArr}
              clickedArrState={clickedArr}
            />
          ))}
        </div>
      </div>
    </>
  );
}
