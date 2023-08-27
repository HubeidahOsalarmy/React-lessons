import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        I am {person.name}, I am {person.age} weeks old, my momma named me {person.nickname}.
      </h2>
    </div>
  );
}

export default Person;
