import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <IoHomeOutline className="icons-react" size={30} />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <IoMdAddCircle className="icons-react" size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
