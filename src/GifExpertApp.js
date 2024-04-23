import React from "react";

export const GifExpertApp = () => {
  const categories = ["OnePunch", "Samuray", "Dragon Ball"];
  return (
    <>
      <h2>GifExpertApp </h2>
      <hr />
      <button>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
