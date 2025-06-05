import React, { useState } from 'react'

function GridLayout() {
    const [gridBox] = useState(Array.from({ length: 9 }, (_, i) => ({
        name: `Div ${i + 1}`
    })))
    const rows = [
        gridBox.slice(0, 3),
        gridBox.slice(3, 5),
        gridBox.slice(5),
        gridBox.slice(3, 5)
    ];



    return (
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: "flex", width: "100%" }}>
                    {row.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                width: `${100 / row.length}%`,
                                height: "100px",
                                border: "1px solid black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GridLayout
