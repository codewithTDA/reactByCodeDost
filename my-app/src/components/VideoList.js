import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import {  useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function VideoList({editVideo}){
   const videos = useVideos()
   const theme = useContext(ThemeContext)
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
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          </div>
    )
}

export default VideoList