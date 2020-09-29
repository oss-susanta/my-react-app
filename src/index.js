import React from 'react';
import {render} from 'react-dom';
import './index.css';

export default function App() {
  return (
    <div className="App">
      Hello, World!
    </div>
  );
}

const el = document.getElementById('root');
el && render(<App />, el);