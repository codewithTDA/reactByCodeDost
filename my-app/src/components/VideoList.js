import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import {  useCallback, useContext ,useEffect,useMemo,useState} from "react";
import ThemeContext from "../context/ThemeContext";
import axios from 'axios';
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({editVideo}){
   const videos = useVideos()
   const theme = useContext(ThemeContext)
   const dispatch = useVideoDispatch();
   const url = 'http://localhost:4500/'
  //  const [videos,setVideo] = useState([]);
  const play= useCallback(() => console.log('Playing..'),[])
  const pause= useCallback(() => console.log('Paused..'),[])
   useEffect(()=>{
    async function handleClick(){
      const res = await axios.get(url);
      console.log('getVideos',res.data);
      dispatch({type:"LOAD",payload:res.data});
     }
         handleClick()
   },[])
   const memoButton = useMemo(()=>{return <PlayButton
    onPlay={play}
    onPause={pause}
  >
    {/* {video.title} */}
    Play
  </PlayButton>},[pause,play])
   
    return(
      <div className={`VideoListContainer ${theme}`} >

        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
            >
              {memoButton}
            </Video>
            
            ))}
            {/* <button onClick={handleClick}>Get Videos</button> */}
          </div>
    )
}

export default VideoList