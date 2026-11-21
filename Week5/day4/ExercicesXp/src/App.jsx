import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
  // Exercise 1: Working with JSX
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // Exercise 2: Objects and Props
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {/* Exercise 1 */}
      <section style={{ borderBottom: "1px solid #ddd", paddingBottom: "20px" }}>
        <h2>Exercise 1: Working with JSX</h2>
        <p>Hello World!</p>
        {myElement}
        <p>React is {sum} times better with JSX</p>
      </section>

      {/* Exercise 2 */}
      <section style={{ borderBottom: "1px solid #ddd", paddingBottom: "20px", marginTop: "20px" }}>
        <h2>Exercise 2: Objects and Props</h2>
        <h3>First Name: {user.firstName}</h3>
        <h3>Last Name: {user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </section>

      {/* Exercise 3 */}
      <section style={{ marginTop: "20px" }}>
        <h2>Exercise 3: HTML Tags in React</h2>
        <Exercise />
      </section>
    </div>
  );
}

export default App;
