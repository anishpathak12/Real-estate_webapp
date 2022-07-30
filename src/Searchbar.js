import { useState } from "react";

export default function Searchbar(props) {
  const [location, SetLocation] = useState("New York");
  const [time, SetTime] = useState('Immidiate');
  const [price, SetPrice] = useState([500,2000]);
  const [type, SetType] = useState('Houses');
  const [filteredData, SetFilteredData] = useState(props.props);
  
console.log(price)
// console.log(price[1])
  const filterMethod = (e) => {
    e.preventDefault();
    SetFilteredData(props.props.filter (prop =>{
      return (
        prop.location == location &&
        prop.time == time &&
        // (prop.price >= price[0] && prop.price <= price[1]) &&
        prop.type == type
        )

    }))
  }

//      useRecoilState      for using global state
// useRecoilValue
// useSetRecoilState


  return (
    <div className="Searchbar">
          <div className="header">
                <h1>Search properties to rent</h1>
                <input type= "text" placeholder= "SearchwithSearchbar" />
          </div>
      <div className="filterButtons">
        <label>Location</label>
        <select className="inputs"
        onChange={(e) => SetLocation(e.target.value)}>
          <option value="New York">New York</option>
          <option value="Ontario">Ontario</option>
          <option value="Texas">Texas</option>
        </select>

        <label>When</label>
        <select className="inputs"
        onChange={(e) => SetTime(e.target.value)}>
          <option value="Immidiate">Immidiate</option>
          <option value="After 15 Days">After 15 Days</option>
          <option value="After 1 Month">After 1 Month</option>
        </select>
        
        <label>Price</label>
        <select className="inputs"
        onChange={(e) => SetPrice(e.target.value)}>
          <option value={[500,2000]}>$500-2000</option>
          <option value={[2000,3000]}>$2000-3000</option>
          <option value={[3000,5000]}>$3000-$5000</option>
        </select>

        <label>PropertyType</label>
        <select className="inputs"
        onChange={(e) => SetType(e.target.value)}>
          <option value="Houses">Houses</option>
          <option value="Villa">Villa</option>
          <option value="Dorm">Dorm</option>
        </select>
        <button onClick={filterMethod} className= "button2">Search</button>
      </div>
      <div className="Data">
     {/* { console.log('anish')}   // why rendering 2 times. */}
     { console.log(filteredData)}
            {filteredData.map(prop => (
                <div className='render'>
                    <span> <img src={prop.img} height= "200px" width= "200px"/></span>
                    <span className="propPrice">{`$ ${prop.price}`}</span>
                    <span>/month</span>
                    <h3>{prop.location}</h3>
                </div>

            ))}
      </div>
      
      {/* <Data  /> */}
    </div>
  );
}

// switch case use karke filter like in task2.js
// case "location" k ander filter func, same for all other cases.
// real-estate prop. should be stored as an object, so can use filter
