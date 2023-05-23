import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

// mobile friendly for >900px, mainly navbar & searchBar heading,serach box
// file move, app to navbar, data.js file should be just data not a comp.


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
    </div>
  );
}

export default App;
