import React, { Suspense, useState } from 'react';
import Sidebar from '../Sidebar';
import './Layout.css';
import { useModalStore } from 'stores/modalStore';

const MenuApp = React.lazy(() => import('menu/MenuApp'));
const Modal = React.lazy(() => import('modal_lib/Modal'));

const Layout = () => {
  const { isModalOpen } = useModalStore((state: any) => state);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal />
        </Suspense>
      )}
      <section className="custom-layout-section">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="custom-layout-child">
          <div className="custom-component-container">
            <div className="custom-section-title">
              <div className="custom-title-background">Menu</div>
            </div>
            <div className="custom-horizontal-linear"></div>
            <div className="custom-component-section">
              <div className="custom-component-background">
                <Suspense fallback={<div>Loading...</div>}>
                  <MenuApp />
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
