import React from "react";

function UserFavoriteAnimals(props) {
  const { favAnimals } = props;

  return (
    <div>
      <h4>Favorite Animals:</h4>
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavoriteAnimals;
