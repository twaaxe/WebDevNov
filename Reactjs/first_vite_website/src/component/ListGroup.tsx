import { useState } from "react";
interface ListGroupProps {
  lesVilles: string[];
  heading: string;
  onSelectCity: (city: string) => void;
}
function ListGroup({ lesVilles, heading, onSelectCity }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {/*fake if statement.
       line17 display No city if cityList is empty
      line18 display the list if citYList is not empty
      */}
      {lesVilles.length === 0 && <p>No City </p>}
      <ul className="list-group">
        {lesVilles.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
