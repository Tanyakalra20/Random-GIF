import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

const Random = () => {
  // const [gif, setGif] = useState("");
  // const[loading, setLoading] = useState('false');

  // async function fetchData()
  //  {
  //   try {
  //       setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching GIF:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const{gif, loading, fetchData} = useGif(); //calling useGif hook
  function clickHandler() {
    fetchData(); 
  }

  return (
    <div className="w-1/2 bg-green-400 rounded-2xl border border-gray-700 flex flex-col items-center gap-y-5 mt-[55px] gap-4">
      <h1 className="uppercase text-3xl underline font-bold mt-[15px]">A Random GIF</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} alt="Random Gif" />
      }
    
      <button
        onClick={clickHandler}
        className="bg-green-50 w-10/12 text-lg py-2 rounded-lg uppercase mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
