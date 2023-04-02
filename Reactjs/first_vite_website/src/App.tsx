import Message from "./Message";
import ListGroup from "./component/ListGroup";
let cityList = ["New-York", "Paris", "London", "Brussels"];

const handleSelectCity = (city: string) => {
  console.log(city);
};

function App() {
  return (
    <div>
      <ListGroup
        onSelectCity={handleSelectCity}
        lesVilles={cityList}
        heading="<Villes>"
      />
    </div>
  );
}

export default App;
