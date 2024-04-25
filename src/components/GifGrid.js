import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

// import { GetGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   GetGifs(category).then(setImages);
  // }, [category]);

  // const GetGifs = async () => {
  //    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
  //      category
  //    )}&limit=10&api_key=v5oiBlkhikozLm82nQrRe1dW55nFKCSN`;

  //   const resp = await fetch(url);
  //   const { data } = await resp.json();

  //   const gifs = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url,
  //     };
  //   });
  //   console.log(gifs);
  //   setImages(gifs);
  // };

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>loading...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
