import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './Home'
import Setup from './Setup'
import React from 'react';
import './index.css';

export default function App() {

  return (
      <HashRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="setup" exact element={<Setup />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
