// import {image} from '../../src/assets/jmkLogo.png'
import "../../public/stylesheets/Nav.css";
// console.log(image)

function Nav() {
  return (
    <nav className="navbar">
      {/* <img src={image}/> */}
      <img className="logo" src="src/assets/jmkLogo.png" alt="img text" />
      <ul>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <button disabled>Sign-up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
