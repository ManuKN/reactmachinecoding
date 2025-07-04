import React, { useState } from 'react';

function EventDelegation() {
  const [isHovered, setIsHovered] = useState({
    id: null,
    ishover: false
  });

  const [addeableValue, setAddeableValue] = useState(1);

  const [noDivs, setNoDivs] = useState(
    Array.from({ length: 9 }, (_, i) => ({
      tagName: "",
      content: null,
      value: i + 1
    }))
  );

  const updateContentForDivs = (i) => {
    setNoDivs((prev) => {
      const shouldUpdate = !prev[i].content;
      const updated = prev.map((item, index) => {
        if (index === i && shouldUpdate) {
          return { ...item, content: addeableValue };
        }
        return item;
      });

      if (shouldUpdate) {
        setAddeableValue((prev) => prev + 1);
      }

      return updated;
    });
  };

  return (
    <div>
      <h3>Nkn banthu</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3 , 1fr)",
          gridTemplateRows: "repeat(3 , 1fr)",
          gap: "10px"
        }}
      >
        {noDivs.map((data, i) => (
          <div
            key={i}
            onClick={() => updateContentForDivs(i)}
            onMouseEnter={() =>
              setIsHovered((prev) => ({
                ...prev,
                id: i,
                ishover: true,
              }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({
                ...prev,
                id: null,
                ishover: false,
              }))
            }
            style={{
              padding: "12px",
              backgroundColor:
                isHovered.ishover && isHovered.id === i ? "darkred" : "red",
              margin: "8px",
              color: "white"
            }}
          >
            div{data.value}
            <p style={{ color: "lightgreen" }}>{data.content ?? ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDelegation;
