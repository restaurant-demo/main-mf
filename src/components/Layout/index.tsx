import React, { Suspense, useState } from 'react';
import Sidebar from '../Sidebar';
import './Layout.css';
import { useModalStore } from 'stores/modalStore';
import { Route, Routes, useLocation } from 'react-router-dom';

const MenuApp = React.lazy(() => import('menu/MenuApp'));
const TablesApp = React.lazy(() => import('tables/TablesApp'));
const Modal = React.lazy(() => import('modal_lib/Modal'));

const titles: Record<string, string> = {
  '/menu': 'Menu',
  '/tables': 'Tables & VIP',
  '/waiters': 'Waiters',
  '/orders': 'Orders',
  '/stats': 'Stats',
  '/settings': 'Settings'
};

const Layout = () => {
  const { modal } = useModalStore((state: any) => state);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();
  const title = titles[location.pathname] || 'Not found';

  return (
    <>
      {modal.isOpen && (
        <Suspense fallback={<div className="spinner"></div>}>
          <Modal />
        </Suspense>
      )}
      <section className="custom-layout-section">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="custom-layout-child">
          <div className="custom-component-container">
            <div className="custom-section-title">
              <div className="custom-title-background">{title}</div>
            </div>
            <div className="custom-horizontal-linear"></div>
            <div className="custom-component-section">
              <div className="custom-component-background">
                <Suspense fallback={<div className="spinner"></div>}>
                  <Routes>
                    <Route path="/menu" element={<MenuApp />} />
                    <Route path="/tables" element={<TablesApp />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
