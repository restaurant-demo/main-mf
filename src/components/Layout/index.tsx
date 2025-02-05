import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './Layout.css';

const MenuComponent = React.lazy(() => import('menu/MenuComponent'));

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="custom-layout-section">
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
        <div className="custom-layout-child">
          <div className="h-screen pt-4 pb-4 pl-8 pr-8">
            <MenuComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
