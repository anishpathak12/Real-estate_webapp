import "./App.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

    return(
        <div className="navbar">
        <ul className="menu">
          <li>
            <h3>Estatery</h3>
          </li>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li className="flexView">
            <label>Manage property</label>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </li>
          <li className="flexView">
            <label>Resources</label>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </li>
        </ul>
        <ul>
          <li>
            <button className="button1">Login</button>
          </li>
          <li>
            <button className="button2">Sign up</button>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;