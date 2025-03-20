import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const[loading, setLoading] = useState('false');
const[tag, setTag] = useState('flowers');

  // async function fetchData()
  //  {
  //   try {
  //       setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching GIF:", error);
  //   }
  // }

  // // useEffect(() => {
  // //   fetchData();
  // // }, []);

  const {gif, loading, fetchData} = useGif(tag); //calling useGif hook

  function clickHandler() {
    fetchData(); 
  }

  function changeHandler(e){
     setTag(e.target.value)
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-2xl border border-gray-700 flex flex-col items-center gap-y-5 mt-[55px] gap-4">
      <h1 className="uppercase text-3xl underline font-bold mt-[15px]">Random {tag} GIF</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} alt="Random Gif" />
      }
      <input className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={changeHandler}
      value={tag}>
      </input>
    
      <button
        onClick={clickHandler}
        className="bg-green-50 w-10/12 text-lg py-2 rounded-lg uppercase  mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
