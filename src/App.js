import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Homepage from "./HomePage";
import Confirm from "./Confirm";
import Form from "./Form";
const App = () => {
    const navigate = useNavigate()
  return (

    <>

      <h1>BloomTech Eats</h1>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/pizza' element={<Form />}></Route>
      </Routes>

    </>

  );



};
export default App;
