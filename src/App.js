import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Cards from './components/cards/cards';

function App() {
  return (
    <div className="App">
        <Header></Header>

		<Cards />

    </div>
  );
}

export default App;
