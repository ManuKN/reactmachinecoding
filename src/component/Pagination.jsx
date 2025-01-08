/* eslint-disable no-const-assign */
import React, { useState } from 'react';

function Pagination({ data }) {
  const itemsPerPage = 4;
  const [pagiNo, setPagiNo] = useState(1);
  let totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (pagiNo - 1) * itemsPerPage;
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <h1>Page {pagiNo}</h1>
      <div>
        {data
          ?.slice(startIndex, startIndex + itemsPerPage)
          .map((ele, index) => (
            <p style={{ backgroundColor: `${ele.color}` }} key={index}>
              {ele.name}
            </p>
          ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'between' }}>
        <button
          onClick={() => {
            if (pagiNo > 1) {
              setPagiNo(pagiNo - 1);
            }
          }}
        >
          ⬅️
        </button>
        <button
          onClick={() => {
            if (pagiNo < totalPages) {
              setPagiNo(pagiNo + 1);
            }
          }}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

export default Pagination;
