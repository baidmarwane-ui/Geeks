import React from "react";
import "./Exercise.css";

function Exercise() {
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <h1 style={styleHeader}>Exercise 3: HTML Tags & Styling in React</h1>

      <p className="para">
        This paragraph is styled using an external CSS class from Exercise.css.
      </p>

      <p>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          Visit Official React Documentation
        </a>
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{ margin: "16px 0" }}>
        <label>
          Enter your thoughts on React:&nbsp;
          <input type="text" placeholder="Type here..." />
        </label>
        &nbsp;
        <button type="submit">Submit</button>
      </form>

      <div>
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300"
          alt="React Logo / Tech Concept"
          style={{ width: "240px", borderRadius: "8px" }}
        />
      </div>

      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM & Efficient Re-renders</li>
        <li>Declarative UI with JSX</li>
      </ul>
    </div>
  );
}

export default Exercise;
