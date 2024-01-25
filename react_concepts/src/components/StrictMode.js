import React, { useEffect } from "react";

export default function StrictMode() {
  var foo1 = "Hello this is foo1.";

  function foo() {
    console.log("This is foo.");
  }

  function handleClick() {
    console.log("I was clicked.");
  }

  useEffect(() => {
    console.log("this is effect");
  });

  return (
    <>
      <div className="component-container">
        <p>{foo1}</p>
        <button onClick={handleClick}>Test strict mode</button>
      </div>
    </>
  );
}
