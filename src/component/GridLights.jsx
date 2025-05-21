import React, { useState } from 'react';

function GridLights() {
  let gridLights = Array.from({ length: 9 }, () => ({
    isActive: false
  }))
  const [grid, setGrid] = useState(gridLights);
  const handleColoringBox = (index) => {
    setGrid((prev) =>
      prev.map((ele, i) =>
        index === i ? { ...ele, isActive: !ele.isActive } : ele
      )
    );
    setTimeout(() => {
      setGrid((prev) =>
        prev.map((ele, i) => (index === i ? { ...ele, isActive: false } : ele))
      );
    }, [1000]);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Grid layout</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          backgroundColor: '#FFA07A',
          border: 'solid black 1px',
        }}
      >
        {grid.map((ele, i) => (
          <div
            key={i}
            onClick={() => handleColoringBox(i)}
            style={{
              width: '40px',
              height: '40px',
              border: 'solid black 1px',
              backgroundColor: `${ele.isActive ? '#008000' : '#FFFFFF'}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GridLights;
