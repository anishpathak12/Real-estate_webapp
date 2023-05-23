import { useState } from "react";
import {Data} from "./Data";
import "./Seachbar.css";

export default function Searchbar(props) {
  const [location, SetLocation] = useState("New York");
  const [time, SetTime] = useState("Immidiate");
  const [price, SetPrice] = useState([500, 2000]);
  const [type, SetType] = useState("Houses");
  const [filteredData, SetFilteredData] = useState(Data);

  console.log(price);
  // console.log(price[1])
  const filterMethod = (e) => {
    e.preventDefault();
    SetFilteredData(
      Data.filter((DataValue) => {
        return (
          DataValue.location == location &&
          DataValue.time == time &&
          // DataValue.price >= price[0] &&
          // DataValue.price <= price[1] &&
          DataValue.type == type
        );
      })
    );
  };

  //      useRecoilState      for using global state
  // useRecoilValue
  // useSetRecoilState

  return (
    <div className="Searchbar">
      <div className="bodyContent">
        <div className="header">
          <h1>Search properties to rent</h1>
          <input
            className="searchInput"
            type="text"
            placeholder="SearchwithSearchbar"
          />
        </div>
        <div className="filterButtons">
          <label>Location</label>
          <select
            className="inputs"
            onChange={(e) => SetLocation(e.target.value)}
          >
            <option value="New York">New York</option>
            <option value="Ontario">Ontario</option>
            <option value="Texas">Texas</option>
          </select>

          <label>When</label>
          <select className="inputs" onChange={(e) => SetTime(e.target.value)}>
            <option value="Immidiate">Immidiate</option>
            <option value="After 15 Days">After 15 Days</option>
            <option value="After 1 Month">After 1 Month</option>
          </select>

          <label>Price</label>
          <select
            className="inputs"
            onChange={(e) => SetPrice([e.target.value])}
          >
            <option value={[500, 2000]}>$500-2000</option>
            <option value={20003000}>$2000-3000</option>
            <option value={[3000, 5000]}>$3000-$5000</option>
          </select>

          <label>PropertyType</label>
          <select className="inputs" onChange={(e) => SetType(e.target.value)}>
            <option value="Houses">Houses</option>
            <option value="Villa">Villa</option>
            <option value="Dorm">Dorm</option>
          </select>
          <button onClick={filterMethod} className="button2">
            Search
          </button>
        </div>
        <div className="Data">
          {console.log(filteredData)}
          {(filteredData != []) ?
          (filteredData.map((DataValue) => (
            <div key={DataValue.serial} className="render">
              <span>
                <img src={DataValue.img} height="200px" width="200px" />
              </span>
              <span className="propPrice">{`$ ${DataValue.price}`}</span>
              <span>/month</span>
              <h3>{DataValue.location}</h3>
            </div>
          ))) : <h2>Data not found</h2>}
        </div>
      </div>
    </div>
  );
}

// switch case use karke filter like in task2.js
// case "location" k ander filter func, same for all other cases.
// real-estate prop. should be stored as an object, so can use filter
