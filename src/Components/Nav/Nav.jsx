import { Link } from "react-router-dom";
import "./Nav.scss";
import homeIcon from "../../assets/media/icons/homeIcon.svg";
import plantIcon from "../../assets/media/icons/plantIcon.svg";
import profileIcon from "../../assets/media/icons/profileIcon.svg";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/plant">
        <img
          className="nav--icon"
          src={plantIcon}
          alt="plant icon navigation option"
        />
      </Link>

      <Link className="nav__item" to="/">
        <img
          className="nav--icon"
          src={homeIcon}
          alt="home icon navigation option"
        />
      </Link>

      <Link className="nav__item">
        <img
          className="nav--icon"
          src={profileIcon}
          alt="profile icon navigation option"
        />
      </Link>
    </div>
  );
};

export default Nav;
