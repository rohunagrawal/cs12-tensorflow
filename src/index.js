import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './Home'
import Setup from './Setup'
import React from 'react';
import './index.css';
import {MathJaxContext} from "better-react-mathjax";

export default function App() {

  const mathjaxConfig = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  return (
    <MathJaxContext version={3} config = {mathjaxConfig} hideUntilTypeset="first"  >
      <HashRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="setup" exact element={<Setup />} />
          </Route>
        </Routes>
      </HashRouter>
    </MathJaxContext>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
