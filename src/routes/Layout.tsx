import { useEffect, useState, Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import NavSidebar from '../components/NavSidebar';
import TopNavbar from '../components/TopNavbar';
import GlobalNavbar from '../components/TopNavbar/GlobalNavbar';
import classNames from '../utils/classNames';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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

export const GlobalLayout = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 rounded-full animate-spin border-y border-solid border-purple-500 border-t-transparent border-4"></div>
      </div>
    );

  return (
    <section className="h-screen">
      <GlobalNavbar />

      <section className="container h-screen max-w-none">
        <Outlet />
      </section>
    </section>
  );
};
