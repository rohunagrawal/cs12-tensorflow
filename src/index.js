import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import Blog from './pages/Blog'
import CS12Home from './pages/CS12/CS12Home'
import Wiki from './pages/Wiki'
import PostPage from './components/Post/postPage'
import DefinitionPage from "./components/Definition/definitionPage";
import TheoremPage from "./components/Theorem/theoremPage";

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
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cs12/" exact element={<CS12Home />} />
            <Route path="blog/" exact element={<Blog />} />
            <Route path="blog/:id" element={<PostPage />} />
            <Route path="wiki/:subdir" element={<Wiki />} />
            <Route path="wiki" exact element={<Wiki />} />
            <Route path="definition/:id" element={<DefinitionPage />} />
            <Route path="theorem/:id" element={<TheoremPage />} />
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
