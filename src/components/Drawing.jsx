import React, { useState } from "react";
import ReactPainter from "react-painter";

export const Drawing = () => {
  //const [color, setColor] = useState("");

  return (
    <>
      Drawing
      <ReactPainter
        width={100}
        height={100}
        onSave={(blob) => console.log(blob)}
        render={({canvas, triggerSave, setLineCap,setLineWidth,setColor,setLineJoin,imageDownloadUrl  }) => (
          <div className="row">
            <div className="col">
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
              <div className="col">  <select onChange={e => setLineCap(e.target.value)}>
        <option value="round">round</option>
        <option value="butt">butt</option>
        <option value="square">square</option>
      </select></div>  
      <div className="col">  <select onChange={e => setLineJoin(e.target.value)}>
        <option value="round">round</option>
        <option value="bevel">bevel</option>
        <option value="miter">miter</option>
      </select></div>
            </div><div className="bg-light border border-dark m-5">{canvas}</div>
            <button className="btn btn-danger" onClick={triggerSave}>Save</button>
            {imageDownloadUrl?<a className="btn btn-success" href={imageDownloadUrl} download>Download</a>:null}
          </div>
        )}
      ></ReactPainter>
    </>
  );
};
