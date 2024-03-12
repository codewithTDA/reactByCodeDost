import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
import './AddVideo.css';
import {useContext, useEffect, useRef, useState} from 'react';
const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

function AddVideo({editableVideo}) {
  const inputRef = useRef(null);
  const dispatch = useVideoDispatch();
  const [video, setVideo] = useState(initialState);
  const theme = useContext(ThemeContext)

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE',payload:video})
    }else{
      dispatch({type:'ADD',payload:video})
    }
    
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
    
  inputRef.current.focus()
    // inputRef.current.value= "demo"
    "TypeHEre".split('').forEach((char,i)=>{
      setTimeout(()=>{
        // console.log(char);
        inputRef.current.placeholder= inputRef.current.placeholder + char
      },200*i)
    })
  },[editableVideo])
  // console.log(inputRef.current);

  return (
    <div  className='addVideoContainer' >
            <form className={theme} >
      <input
        ref ={inputRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        {editableVideo?'Edit':'Add'} Video
      </button>
    </form>
    </div>
  );
}

export default AddVideo;