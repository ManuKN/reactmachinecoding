// import { useState } from 'react';
import './App.css';
import EventDelegation from './component/EventDelegation.jsx';

// import EventDelegation from './component/EventDelegation.jsx';
import GridLayout from './component/GridLayout.jsx';
function App() {
  // const [show, setShow] = useState("");
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
      {/* <LikeButton postId={234214} initialLikes={8} /> */}
      {/* <ReactOptimitic /> */}
      {/* <OTPLogin /> */}
      {/* <Debouncing /> */}
      <EventDelegation />
      {/* <GridLayout /> */}
    </div>
  );
}

export default App;
