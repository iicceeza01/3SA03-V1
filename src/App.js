import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "Engineering";
class App extends Component {
  render() {
    return (
      <div class ="wallpaper">
      <div>
        <WordCard value="Engineering" />
        <button><b>xxd</b></button>
      </div></div>
    );
  }
}
export default App;