import Logo from "../../assets/logo.svg";
import "../../App.css"
import { useState } from "react";
const Sidebar = () => {
  const [toggle, showMenu] = useState(false)
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav-logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="nav">
          <div className="nav-menu">
            <ul className="nav-list flex flex-col gap-y-[1rem]">
              <li className="nav-item">
                <a href="#home" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#work" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-[1.5rem] text-secondary font-bold hover:text-primary">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-footer">
          <span className="copyright text-[hsl(245, 15%, 65%)] text-small-siz" style={{transform: 'rotate(-180deg)', writingMode  : 'vertical-rl'}}>&copy; 2023.</span>
        </div>
      </aside>

      <div className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
