import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({ user, onLogout, theme, handleTheme }) => {
  return (
    <div className="">
      <Sidebar user={user} onLogout={onLogout} theme={theme} handleTheme={handleTheme}  />
      <div className="p-4 sm:ml-64 ">
        <Outlet />
      </div>
    </div>
  );
};
