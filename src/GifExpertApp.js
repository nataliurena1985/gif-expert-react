import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["OnePunch", "Samuray", "Dragon Ball"];

  const [categories, setCategories] = useState(["OnePunch"]);

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
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
