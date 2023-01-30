import React from "react";
import Video from "../Video/Video";
import Menu from "../Menu/Menu";

// Object with the 4 videos to play in the player.
const VIDEOS = {
  aventura: "https://www.youtube.com/watch?v=CsziEW_gYhU",
  ozuna: "https://www.youtube.com/watch?v=K2kUyHgadQo",
  tpain: "https://www.youtube.com/watch?v=yfX7mCHbroc",
  sting: "https://www.youtube.com/watch?v=NlwIDxCjL-8",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.aventura };
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
