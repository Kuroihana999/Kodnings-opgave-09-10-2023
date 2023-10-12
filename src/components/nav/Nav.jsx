import logo from "../../img/Wizard spells international.png";

const nav = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link custom-nav " aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-nav" href="#">
            Contact
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link custom-nav" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-nav active" href="#">
          Shop
          </a>
        </li>
      </ul>
      <figure>
          <img className="img-fluid custom-logo" src={logo} alt="" />
        </figure>
    </nav>
    
    
  );
};

export default nav;
