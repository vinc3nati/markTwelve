import React, { useState } from "react";

export default function Area() {
  const [state, setState] = useState({
    side1: 0,
    side2: 0,
    side3: 0
  });
  const [msg, setMsg] = useState("");

  function handleChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: parseInt(value)
    });
  }

  function addAngles() {
    if (state.side1 === 0 && state.side2 === 0 && state.side3 === 0) {
      setMsg("Invalid Input");
    } else {
      if (
        state.side1 + state.side2 > state.side3 &&
        state.side2 + state.side3 > state.side1 &&
        state.side1 + state.side3 > state.side2
      ) {
        const semiPerimeter = (state.side1 + state.side2 + state.side3) / 2;

        const res = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - state.side1) *
            (semiPerimeter - state.side2) *
            (semiPerimeter - state.side3)
        ).toFixed(4);
        setMsg(`Area of a triangle using heron's formula is ${res}`);
      } else {
        setMsg("Enter valid side lengths");
      }
    }
  }

  return (
    <div className="trianglesContainer">
      <h2>Calculate Area of a triangle</h2>
      <form className="inpForm">
        <label>Enter first side of a triangle</label>
        <input required onChange={handleChange} type="number" name="side1" />
        <label>Enter second side of a triangle</label>
        <input required onChange={handleChange} type="number" name="side2" />
        <label>Enter third side of a triangle</label>
        <input required onChange={handleChange} type="number" name="side3" />
        <button className="btn btn-reset" type="button" onClick={addAngles}>
          calculate
        </button>
      </form>
      <div className="showMsg">{msg}</div>
    </div>
  );
}
