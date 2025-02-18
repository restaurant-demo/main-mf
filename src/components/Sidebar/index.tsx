import React from 'react';
import './Sidebar.css';
import arrowIcon from 'assets/svg/arrow-square-left.svg';
import menuIcon from 'assets/svg/menu.svg';
import tablesIcon from 'assets/svg/tables.svg';
import waitersIcon from 'assets/svg/waiters.svg';
import ordersIcon from 'assets/svg/orders.svg';
import statsIcon from 'assets/svg/stats.svg';
import settingsIcon from 'assets/svg/settings.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `custom-router-link ${isActive ? `custom-active-link ${isOpen ? 'custom-translateX-open' : 'custom-translateX-close'}` : 'custom-inactive-link'}`;
  const linkStyle = {
    padding: isOpen ? '0.76vw 0 0.76vw 1.2vw' : '0.76vw 0'
  };

  return (
    <>
      <div className={`custom-sidebar ${isOpen ? 'custom-sidebar-open' : 'custom-sidebar-close'}`}>
        <div className={`custom-logo-container ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Restaurant Demo</div>
        <ul className="custom-ul">
          <NavLink to="/menu" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img className={`custom-list-icon`} src={menuIcon} alt="menu" />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Menu</span>
            </li>
          </NavLink>
          <NavLink to="/tables" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img
                className={`custom-list-icon`}
                src={tablesIcon}
                alt="tables"
              />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Tables & VIP</span>
            </li>
          </NavLink>
          <NavLink to="/waiters" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img
                className={`custom-list-icon`}
                src={waitersIcon}
                alt="waiters"
              />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Waiters</span>
            </li>
          </NavLink>
          <NavLink to="/orders" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img
                className={`custom-list-icon`}
                src={ordersIcon}
                alt="orders"
              />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Orders</span>
            </li>
          </NavLink>
          <NavLink to="/stats" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img
                className={`custom-list-icon`}
                src={statsIcon}
                alt="stats"
              />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Stats</span>
            </li>
          </NavLink>
          <NavLink to="/settings" className={linkClass} style={linkStyle}>
            <li className="custom-list-element">
              <img
                className={`custom-list-icon`}
                src={settingsIcon}
                alt="settings"
              />
              <span className={`custom-navlink-text ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Settings</span>
            </li>
          </NavLink>
        </ul>
        <button className={`custom-toggle-button ${isOpen ? 'left-15vw' : 'left-4vw'}`} onClick={toggleSidebar}>
          <img className={`custom-button-icon ${isOpen ? '' : 'flip-x'}`} src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
