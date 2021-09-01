import React, { useState } from "react";

export default function Hypotenuse() {
  const [state, setState] = useState({
    base: 0,
    height: 0
  });
  const [msg, setMsg] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: Number(value)
    });
  }

  function calculateHypo() {
    if (state.base === 0 && state.height === 0) {
      setMsg("Invalid Input");
    } else {
      var res = Math.sqrt(
        state.base * state.base + state.height * state.height
      );
      setMsg(`The length of Hypotenuse is : ${res}`);
    }
  }

  return (
    <div className="trianglesContainer">
      <h2>Calculate Hypotenuse of a triangle</h2>
      <form className="inpForm">
        <label htmlFor="base">Enter base value (a) = </label>
        <input
          required
          onChange={handleChange}
          type="number"
          name="base"
          id="base"
        />
        <label htmlFor="height">Enter height value (b) =</label>
        <input
          required
          onChange={handleChange}
          type="number"
          name="height"
          id="height"
        />
        <button className="btn btn-reset" type="button" onClick={calculateHypo}>
          Calculate
        </button>
      </form>
      <h2>Hypotenuse formula</h2>
      <h3>√(base² + height²)</h3>
      <div className="showMsg">{msg}</div>
    </div>
  );
}
