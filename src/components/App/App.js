import React from "react";
import Video from "../Video/Video";
import Menu from "../Menu/Menu";

// Object with the 4 videos to play in the player.
const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }
  render() {
    return (
      <div>
        <h1>Favorite Video's</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;
