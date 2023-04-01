import { useState } from "react";

function ListGroup() {
  let cityList = ["New-York", "Paris", "London", "Brussels"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {/*fake if statement.
       line17 display No city if cityList is empty
      line18 display the list if citYList is not empty
      */}
      {cityList.length === 0 && <p>No City </p>}
      <ul className="list-group">
        {cityList.map((x, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={x}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
