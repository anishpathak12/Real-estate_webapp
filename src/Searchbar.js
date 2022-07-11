import { useState } from "react";
import Data from "./Data";

export default function Searchbar(props) {
  const [location, SetLocation] = useState("New York");
  const [time, SetTime] = useState();
  const [price, SetPrice] = useState();
  const [type, SetType] = useState();

  const filterMethod = () => {
    // switch (time) {
    //     case "Immediate":
    //         console.log("N.Y");
    //         break;
    //     case "Ontario":
    //         console.log("ontario");
    //         break;
    //     default:
    //         console.log("pathak");
    //         break;
    // }
     console.log(props)
  };

  return (
    <div className="Searchbar">
          <div className="header">
                <h2>Search properties to rent</h2>
                <select>
                  <option>SerchwithSearchBar</option>
                </select>
          </div>
      <div className="filterButtons">
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => SetLocation(e.target.value)}
        />

        <label>When</label>
        <select name="when" id="when"
        onChange={(e) => SetTime(e.target.value)}>
          <option value="Immediate">Immediate</option>
          <option value="After 15 Days">After 15 Days</option>
          <option value="After 1 Month">After 1 Month</option>
        </select>
        <label>Price</label>
        <select name="Price" id="Price"
        onChange={(e) => SetPrice(e.target.value)}>
          <option value="$500-2000">$500-2000</option>
          <option value="$2000-3000">$2000-3000</option>
          <option value="$3000-$5000">$3000-$5000</option>
        </select>

        <label>PropertyType</label>
        <select name="PropertyType" id="PropertyType"
        onChange={(e) => SetType(e.target.value)}>
          <option value="Houses">Houses</option>
          <option value="Villa">Villa</option>
          <option value="Dorm">Dorm</option>
        </select>
        <button onClick={filterMethod} className= "button2">Search</button>
      </div>
      
      {/* <Data  /> */}
    </div>
  );
}

// switch case use karke filter like in task2.js
// case "location" k ander filter func, same for all other cases.
// real-estate prop. should be stored as an object, so can use filter
