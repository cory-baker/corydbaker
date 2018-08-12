import React, { Component, ReactDOM } from "react"
import triangle from "./assets/triangle.png"
import "./App.css"
import FullMenu from "./components/FullMenu"

class App extends Component {
  render() {
    return (
      <div ref={this.myRef} className="App">
        <h1>CORY D BAKER</h1>
        <h2>Full Stack Developer</h2>
        <FullMenu />
      </div>
    )
  }
}

export default App
