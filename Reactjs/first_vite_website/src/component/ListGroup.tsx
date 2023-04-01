function ListGroup() {
  let cityList = ["New-York", "Paris", "London", "Brussels"];
  cityList = [];

  const getMessage = () => {
    return cityList.length == 0 ? <p>No City Found</p> : <p>blablabla</p>;
  };

  return (
    <>
      <h1>List</h1>

      {/*fake if statement.
       line17 display No city if cityList is empty
      line18 display the list if citYList is not empty
      */}
      {cityList.length === 0 && <p>No City </p>}
      <ul className="list-group">
        {cityList.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
