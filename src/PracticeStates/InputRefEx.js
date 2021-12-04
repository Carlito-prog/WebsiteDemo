import React from "react";


export default class ColorBlock extends React.Component {
  state = {
      
    color: "",

  };


  inputRef = React.createRef();
  textRef = React.createRef();

  upadateColor = () => {
      this.setState(()=>({ color: "white", text: this.textRef.current.value })
      );
  };

  clearInput = () => {
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
    this.upadateColor()
  };


  render() {
      return (
    <div>
        <div className="colorbox" ref={this.textRef}> </div>
      <div className="colorbox"> </div>
      <input type="color" ref={this.inputRef} onChange={this.upadateColor} />
      <button onClick={this.clearInput}> Clear </button>
    </div>

    )
  }
}
