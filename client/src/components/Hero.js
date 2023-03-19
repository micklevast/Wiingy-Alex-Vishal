import React,{useState} from "react";
// import video from "../assets/Video/BrainStation Sample Video.mp4";
import ReactPlayer from "react-player";

export default function Hero(props) {
  const [error, setError] = useState(false);
  // const randomVideoId = 'dQw4w9WgXcQ'; // Replace with your own random video ID

  // const handlePlayerError = () => {
  //   setError(true);
  // };

  // const videoUrl = (props.video)  ? "https://www.youtube.com/watch?v=uKsBZzB-s4E" : props.video;

  console.log("sdmcksmdokmsdkdcm", props.video)
  return (
    <div className="hero" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* <video className="hero__video" poster={props.hero} controls>
        <source src={props.video} type={'mp4'} />
      </video> */}
      {/* <ReactPlayer url={props.video} className="hero__video" controls height={'100'} width = {'100'}/> */}
      
      <ReactPlayer
        url={(props.video) === undefined ? "https://www.youtube.com/watch?v=uKsBZzB-s4E" : props.video}
        className="hero__video"
        controls
        height={'100'}
        width={'100'}
        
      />


    </div>
  );
}
