import { Outlet } from "react-router-dom";
import { useProviderTheme } from "../hooks";

export const MainLayout = () => {

  const { theme, setTheme} = useProviderTheme()

  return (
    <>
      <div className="bg-gray-400 dark:bar ">
        <Outlet />
      </div>
    </>
  );
};
