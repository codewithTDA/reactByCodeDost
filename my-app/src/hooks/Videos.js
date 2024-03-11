import { useContext } from "react";
import VideosContext from "../context/VideosContext";


function useVideos(){
    // console.log({VideosContext});
  return   useContext(VideosContext);

}
export default useVideos;