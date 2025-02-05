import React from 'react';
import './Sidebar.css';
import arrowIcon from "assets/svg/arrow-square-left.svg";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <>
      <div className={`custom-sidebar ${!isOpen ? 'w-19vw' : 'w-5vw'}`}>
        <div className="custom-logo-container">Restaurant Demo</div>
        <ul className="custom-ul">
          <li className="custom-list-element">Menu</li>
          <li className="custom-list-element">Tables</li>
          <li className="custom-list-element">Waiters</li>
          <li className="custom-list-element">Orders</li>
          <li className="custom-list-element">Stats</li>
          <li className="custom-list-element">Settings</li>
        </ul>
        <button className={`custom-toggle-button ${!isOpen ? "left-15vw" : "left-4vw"}`} onClick={toggleSidebar}>
          <img className={`custom-button-icon ${!isOpen ? "" : "flip-x"}`} src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
