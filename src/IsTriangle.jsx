import React, { useState } from "react";

export default function IsTriangle() {
  const [state, setState] = useState({
    angle1: 0,
    angle2: 0,
    angle3: 0
  });
  const [msg, setMsg] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: parseInt(value)
    });
  }

  function addAngles() {
    if (state.angle1 === 0 && state.angle2 === 0 && state.angle3 === 0) {
      setMsg("Invalid Input");
    } else {
      var sum = state.angle1 + state.angle2 + state.angle3;
      if (sum === 180) {
        setMsg("Yay!! It's a triangle");
      } else {
        setMsg("Not a triangle");
      }
    }
  }

  return (
    <div className="trianglesContainer">
      <h2>Angles of triangles</h2>
      <form className="inpForm">
        <label>Angle 1</label>
        <input onChange={handleChange} type="number" name="angle1" />
        <label>Angle 2</label>
        <input onChange={handleChange} type="number" name="angle2" />
        <label>Angle 3</label>
        <input onChange={handleChange} type="number" name="angle3" />
        <button className="btn btn-reset" type="button" onClick={addAngles}>
          check
        </button>
      </form>
      <div className="showMsg">{msg}</div>
    </div>
  );
}
