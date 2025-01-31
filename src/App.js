import { useState } from 'react';
import './App.css';
import DebouncingRateLimiter from './component/DebouncingRateLimiter.jsx';
import EmiCalulator from './component/EmiCalulator.jsx';
import GridLights from './component/GridLights.jsx';
import LikedList from './component/LikedList.jsx';
import Pagination from './component/Pagination.jsx';
import PromisesPlayground from './component/PromisesPlayground.jsx';
import ThrottlingRateLimiter from './component/ThrottlingRateLimiter.jsx';
import ValidationForm from './component/ValidationForm.jsx';
import data from './data/dataArray.js';
import Counter from './component/Counter.jsx';
import React19 from './component/React19.jsx';
import ReactOptimitic from './component/ReactOptimitic.jsx';
import OTPLogin from './component/OTPLogin.jsx';
function App() {
  const [show, setShow] = useState("");
  return (
    <div className='App' style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <Pagination data={data} /> */}
      {/* <EmiCalulator /> */}
      {/* <LikedList /> */}
      {/* <GridLights /> */}
      {/* <PromisesPlayground />
      <ThrottlingRateLimiter /> */}
      {/* <DebouncingRateLimiter /> */}
      {/* <button onClick={() => setShow(true)}>show</button>
      {show ? <Counter /> : <Counter />} */}
      {/* <React19 name={show} setName={setShow} /> */}
      <ReactOptimitic />
      <OTPLogin />
    </div>
  );
}

export default App;
