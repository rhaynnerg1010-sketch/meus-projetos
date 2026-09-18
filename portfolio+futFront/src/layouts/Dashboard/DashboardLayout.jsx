import { Outlet } from "react-router";
import Asidebar from "../../components/common/Asidebar";

const DashboardLayout = () => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <Asidebar />
      <main className="flex-grow-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;