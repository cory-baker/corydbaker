import React, { Component, ReactDOM } from "react"
import triangle from "./assets/triangle.png"
import "./App.css"
import mePic from "./assets/mebest.png"
import FullMenu from "./components/FullMenu"

class App extends Component {
  render() {
    return (
      <div ref={this.myRef} className="App">
        <h1>CORY D BAKER</h1>
        <h2>Full Stack Developer</h2>
        <img src={mePic} className="fadeIn" id="mePicMobile" />
        <FullMenu />
      </div>
    )
  }
}

export default App
