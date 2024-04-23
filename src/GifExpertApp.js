import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //const categories = ["OnePunch", "Samuray", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "OnePunch",
    "Samuray",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    // categories.push("hunterX");
    setCategories([...categories, "hunterX"]);
  };

  return (
    <>
      <h2>GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
