import './App.css';
import './Seachbar.css';
import './Data.css'
import Data from './Data';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <ul>
          <li><h3>Estatery</h3></li>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            <label>Manage property</label>
            <select name="Manage Property">
              {/* <option value ="a">a</option>
              <option value ="b">b</option> */}
            </select></li>
          <li>
          <label>Resources</label>
          <select name="Resources">
          </select>
          </li>
        </ul>
        <ul>
          <li>
            <button className= "button1">Login</button>
          </li>
          <li>
            <button className= "button2">Sign up</button>
          </li>
        </ul>
      </div>
      <Data />
    </div>
  );
}

export default App;
