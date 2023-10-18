import { useEffect, useState } from "react";
import GifsSkeleton from "./GifsSkeleton";

const Gifs = ({ closeGif }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gifWord, setGifWord] = useState("");

  //
  useEffect(() => {
    getTrendingGifs();
  }, []);

  const getTrendingGifs = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=GRFtDf0bUGl9vont2DutEQmaCr7O5VRY`
      );
      const data = await res.json();
      if (res) {
        setLoading(false);
      }
      if (!res.ok) {
        setLoading(false);
      }
      if (res.ok) {
        setLoading(false);
      }
      setGifs(data.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  //
  const getGifs = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if(gifWord === ""){
        getTrendingGifs()
      }else{
        const res =
          await fetch(`https://api.giphy.com/v1/gifs/search?q=${gifWord}&api_key=GRFtDf0bUGl9vont2DutEQmaCr7O5VRY`);
        const data = await res.json();
        if (res) {
          setLoading(false);
        }
        if (!res.ok) {
          setLoading(false);
        }
        if (res.ok) {
          setLoading(false);
        }
        setGifs(data.data);
      }

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="gif_cont_wrapper">
      <div className="gif_cont_header">
        <form onSubmit={getGifs}>
          <input
            type="text"
            placeholder="search gif..."
            onChange={(e) => setGifWord(e.target.value)}
            onKeyUp={getGifs}
          />
        </form>
        <i className="fa-solid fa-xmark" onClick={closeGif}></i>
      </div>
      <div className="gif_cont_body">
        {loading && <GifsSkeleton />}
        {gifs &&
          gifs.map((gif) => (
            <div className="gif_holder" key={gif.id}>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gifs;
