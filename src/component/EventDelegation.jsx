import React, { useState } from 'react'

function EventDelegation() {
  const [isHovered, setIsHovered] = useState({
    id: null,
    ishover: false,
    addeableValue: 1
  });

  const [noDivs, setNoDivs] = useState(
    Array.from({ length: 9 }, (_, i) => ({
      tagName: "",
      content: null,
      value: i + 1
    }))
  );


  const updateContentForDivs = (i) => {
    let shouldUpdate = false;
    setNoDivs((prev) =>
      prev.map((data, index) => {
        if (i === index && !data.content) {
          shouldUpdate = true;
          return {
            ...data,
            content: isHovered.addeableValue,
          };
        }
        return data;
      })
    );

    if (shouldUpdate) {
      setIsHovered((prev) => ({
        ...prev,
        addeableValue: prev.addeableValue + 1,
      }));
    }
  };


  return (
    <div>
      Nkn banthu
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3 , 1fr)", gridTemplateRows: "repeat(3 , 1fr)", gap: "10px" }}>
        {noDivs.map((data, i) => (
          <div
            onClick={() => updateContentForDivs(i)}
            onMouseEnter={() => setIsHovered({ id: i, ishover: true })}
            onMouseLeave={() => setIsHovered({ id: null, ishover: false })}
            style={{ padding: "12px", backgroundColor: isHovered.ishover && isHovered.id === i ? "darkred" : "red", margin: "8px" }} key={i}>
            div{data.value}
            <p style={{ color: "green" }}>{data.content ?? ""}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventDelegation;
