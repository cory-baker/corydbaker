import React, { Component } from "react"

import triangle from "../assets/triangle.png"
import mePic from "../assets/mebest.png"
import MenuContent from "./MenuContent"
import App from "../App"
class FullMenu extends Component {
  constructor() {
    super()
    this.state = {
      class: "bounce",
      div: "",
      menuDown: false,
      contact: "",
      projects: "",
      about: ""
    }
  }
  // componentDidMount() {
  //   if (this.state.animation) {
  //   }
  // }
  scrollToBottom = () => {
    let scrollingElement = document.scrollingElement || document.body
    scrollingElement.scrollTop = scrollingElement.scrollHeight
  }
  handleAbout = () => {
    console.log("hi")
    this.setState({ about: <p>Coming soon</p> })
  }

  handleProjects = () => {
    this.setState({ projects: <p>Coming soon</p> })
  }

  handleContact = () => {
    this.setState({ contact: <p>`douglasb2008@gmail.com`</p> })
  }

  render() {
    return (
      <div id="FullMenu">
        {this.state.div}

        <div id="triangleDiv">
          <img
            className={this.state.class}
            onClick={() => {
              if (this.state.menuDown) {
              } else {
                let scrollSet = setInterval(this.scrollToBottom, 10)
                this.setState({
                  class: "",
                  menuDown: true
                })
                let that = this
                setTimeout(function() {
                  that.setState({
                    class: "",
                    div: <MenuContent />
                  })
                }, 1000)
                setTimeout(function() {
                  clearInterval(scrollSet)
                }, 3000)
              }
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
