import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    imageUrl:""
  }
  
  componentDidMount(){

    fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho ')
      .then( res => res.json())
      .then( json => json.data.image_url)
      .then((imageUrl) => {

        this.setState({
          imageUrl: imageUrl
        })
      })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
          <a className="rainbow" href="https://www.facebook.com/Wangtaglang">Welcome to React #WINAI WANGTAGLANG</a>
          
          </h2>
          <h2>TOP SITE</h2>
        </div>
        <p className="App-intro">
        HELLO WORLD
        </p>

        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
