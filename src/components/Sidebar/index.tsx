import React from 'react';
import './Sidebar.css';
import arrowIcon from 'assets/svg/arrow-square-left.svg';
import menuIcon from 'assets/svg/menu.svg';
import tablesIcon from 'assets/svg/tables.svg';
import waitersIcon from 'assets/svg/waiters.svg';
import ordersIcon from 'assets/svg/orders.svg';
import statsIcon from 'assets/svg/stats.svg';
import settingsIcon from 'assets/svg/settings.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <>
      <div className={`custom-sidebar ${!isOpen ? 'custom-sidebar-open' : 'w-5vw'}`}>
        <div className="custom-logo-container">Restaurant Demo</div>
        <ul className="custom-ul">
          <Link to="/menu">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={menuIcon} alt="menu" />
              Menu
            </li>
          </Link>
          <Link to="/tables">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={tablesIcon} alt="tables" />
              Tables
            </li>
          </Link>
          <Link to="/waiters">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={waitersIcon} alt="waiters" />
              Waiters
            </li>
          </Link>
          <Link to="/orders">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={ordersIcon} alt="orders" />
              Orders
            </li>
          </Link>
          <Link to="/stats">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={statsIcon} alt="stats" />
              Stats
            </li>
          </Link>
          <Link to="/settings">
            <li className="custom-list-element">
              <img className="custom-list-icon" src={settingsIcon} alt="settings" />
              Settings
            </li>
          </Link>
        </ul>
        <button className={`custom-toggle-button ${!isOpen ? 'left-15vw' : 'left-4vw'}`} onClick={toggleSidebar}>
          <img className={`custom-button-icon ${!isOpen ? '' : 'flip-x'}`} src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
