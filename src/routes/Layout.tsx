import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import classNames from '../utils/classNames';
import NavSidebar from '../components/NavSidebar';
import TopNavbar from '../components/TopNavbar';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <NavSidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
        {/* main content */}
        <div className="flex flex-1 flex-col md:pl-64">
          {/* main top bar */}
          <TopNavbar setOpen={setSidebarOpen} />
          {/*end main top bar */}

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
