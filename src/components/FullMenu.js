import React, { Component } from "react"

import triangle from "../assets/triangle.png"
import App from "../App"
class FullMenu extends Component {
  constructor() {
    super()
    this.state = {
      class: "",
      div: ""
    }
  }

  render() {
    return (
      <div id="FullMenu">
        {this.state.div}
        <div id="triangleDiv">
          <img
            className={this.state.class}
            onClick={() => {
              this.setState({ class: "bounce" })
              let that = this
              setTimeout(function() {
                that.setState({
                  class: "",
                  div: <div className="menuDiv" />
                })
              }, 1000)
            }}
            src={triangle}
            id="triangle"
          />
        </div>
      </div>
    )
  }
}

export default FullMenu
