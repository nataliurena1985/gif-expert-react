import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("hola mundo");
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit hecho");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
