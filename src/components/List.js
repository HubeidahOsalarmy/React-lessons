import React from "react";
import Person from "./Person"
//using map method to create list of names
//function List() {
//const names = ["Abdullah", "Ubaydatullah", "Ubaydullah"];
//const nameList = names.map((name) => <h2>{name}</h2>);
//return <div>{nameList}</div>;
//}

function List() {
  const names = ["Abdullah", "Ubaydatullah", "Ubaydullah"]
  const persons = [
    {
      id: 1,
      name: "Abdullah",
      age: 4.5,
      nickname: "Omomayowa",
    },
    {
      id: 2,
      name: "Ubaydatullah",
      age: 4.5,
      nickname: "Omomurewa",
    },
    {
      id: 3,
      name: "Ubaydullah",
      age: 4.5,
      nickname: "Omomuyiwa",
    },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{index}   {name}</h2>) 
  return <div>{nameList}</div>
}

export default List;
