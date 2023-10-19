import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default function Homepage(){
    const navigate = useNavigate()
return (
    <div >
        <button onClick={() => navigate('/pizza')} id='order-pizza' className='pizzaButton'>Order Pizza</button>
  
  </div>
)
}