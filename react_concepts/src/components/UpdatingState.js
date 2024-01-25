import React, { useState } from "react";

export default function UpdatingState() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const fullname = firstname + " " + lastname;

  function handleChange(e) {
    switch (e.target.name) {
      case "firstname":
        setFirstName(e.target.value);
        break;
      case "lastname":
        setLastName(e.target.value);
        break;
      default:
        return true;
    }
  }

  return (
    <>
      <div className="component-container">
        <div className="form-container">
          <form name="name-form">
            <label htmlFor="firstname">First name</label>
            <input
              name="firstname"
              id="firstname"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lastname">Last name</label>
            <input
              name="lastname"
              id="lastname"
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </form>
        </div>
        <div className="output-container">
          Full name: <b>{fullname}</b>
        </div>
      </div>
    </>
  );
}
