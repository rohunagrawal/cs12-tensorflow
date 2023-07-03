import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Blog from './pages/Blog'
import PostPage from './components/Post/PostPage'

import React from 'react';
import './index.css';

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blog/:id" element={<PostPage />} />
          <Route exact path="blog/" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
