import { useContext } from "react";
import VideoDispatchContext from "../context/VideosDispatchContext";


function useVideoDispatch(){
  return   useContext(VideoDispatchContext);

}
export default useVideoDispatch;