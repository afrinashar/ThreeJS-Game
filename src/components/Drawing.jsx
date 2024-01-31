import React, { useState } from "react";
import ReactPainter from "react-painter";

export const Drawing = () => {
  //const [color, setColor] = useState("");

  return (
    <>
      Drawing
      <ReactPainter
        width={1000}
        height={1000}
        onSave={(blob) => console.log(blob)}
        render={({canvas, triggerSave, setLineCap,setLineWidth,setColor  }) => (
          <div>
            <div className="toolbox">
              <div className="flex">
                <label htmlFor=""> Color</label> 
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="flex">
                <label htmlFor=""> Line</label> 
                <input type="range"  min={1} max={50} onChange={e => setLineWidth(e.target.value)} />
              </div>
              <div className="toolbox">  <select onChange={e => setLineCap(e.target.value)}>
        <option value="round">round</option>
        <option value="butt">butt</option>
        <option value="square">square</option>
      </select></div>
            </div>
            <button onClick={triggerSave}>Save Canvas</button>
            <div>{canvas}</div>
          </div>
        )}
      ></ReactPainter>
    </>
  );
};
