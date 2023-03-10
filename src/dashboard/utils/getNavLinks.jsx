import { MdSpaceDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";

const navLinksAdmin = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/",
  },
  {
    id: 3,
    name: "Logout",
    icon: <HiLogout />,
    path: "/",
  },
];

const navLinksClient = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/",
  },
  {
    id: 2,
    name: "Logout",
    icon: <HiLogout />,
    path: "/",
  },
];

export const getNavLinks = ({ user }) => {

  if (user.role === "admin") {
    return navLinksAdmin;
  }
  if (user.role === "client") {
    return navLinksClient;
  }
};
