import React from "react";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <img src={this.props.img} alt=""></img>;
  }
}
