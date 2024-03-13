// AddressForm.js
import React, { useState } from "react";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ok item will deliverd soon....")
    console.log("Submitted Address:", { name, street, city, state, zip });
     
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Street:</label>
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <div>
        <label>ZIP Code:</label>
        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>
      <button type="submit">Submit Address</button>
    </form>
  );
};

export default AddressForm;
