import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login }from './components/LoginPage';
import { TokenDisplay } from "./components/TokenDisplay";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<TokenDisplay/>} />
        <Route path="*" element={<div onClick={() => console.log(window.location.pathname)}>You are at: {window.location.pathname}</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
