import { NavLink } from "react-router-dom";
import { getNavLinks } from "../../utils";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";

export const NavList = ({ user, onLogout, theme, handleTheme }) => {
  const links = getNavLinks(user);

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2">
        {links.map((route) => {
          return (
            <li
              key={route.id}
              onClick={route.name === "Logout" ? onLogout : undefined}
            >
              <NavLink
                to={route.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ">
                  {route.icon}
                </div>
                <span className="ml-3">{route.name}</span>
              </NavLink>
            </li>
          );
        })}
        <div
          className="flex w-24 h-24   border-[#111827] shadow-lg rounded-full mx-auto  items-center justify-center absolute bottom-12 left-20 cursor-pointer transition-all hover:scale-95"
          onClick={handleTheme}
        >
          {theme === "dark" ? (
            <CiDark size={32} color="white" />
          ) : (
            <BsSun size={32} color="#111827" />
          )}
        </div>
      </ul>
    </div>
  );
};
