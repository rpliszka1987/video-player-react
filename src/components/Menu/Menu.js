import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const song = e.target.value;
    this.props.chooseVideo(song);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="aventura" /> Aventura
        <input type="radio" name="src" value="ozuna" /> Ozuna
        <input type="radio" name="src" value="tpain" /> Tpain
        <input type="radio" name="src" value="sting" /> Sting
      </form>
    );
  }
}

export default Menu;
