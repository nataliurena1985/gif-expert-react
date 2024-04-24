import React from "react";

export const GifGrid = ({ category }) => {
  const GetGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=v5oiBlkhikozLm82nQrRe1dW55nFKCSN";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  GetGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};