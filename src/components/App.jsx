import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [fNameHeading, setFNameHeading] = useState("");
  const [lastName, setLastName] = useState("");
  const [lNameHeading, setLNameHeading] = useState("");

  function captureFName(event) {
    setFirstName(event.target.value);
  }

  function captureLName(event) {
    setLastName(event.target.value);
  }

  function pushAction() {
    setFNameHeading(firstName);
    setLNameHeading(lastName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fNameHeading} {lNameHeading}{" "}
      </h1>
      <form onSubmit={pushAction}>
        <input
          onChange={captureFName}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={captureLName}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
