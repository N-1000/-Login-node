import React from 'react';
import './Hello.css';
import Login from './Login';
import{BrowserRouter, Routes, Route} from "react-router-dom"


const Hello = () => {
  return (
    <div className="container">
      <div className="hello-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
console.log('todo ok')
export default Hello
