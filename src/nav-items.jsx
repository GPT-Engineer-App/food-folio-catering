import { Home, Menu, FileText, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import MenuPage from "./pages/Menu.jsx";
import Orders from "./pages/Orders.jsx";
import Account from "./pages/Account.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: <Menu className="h-4 w-4" />,
    page: <MenuPage />,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <FileText className="h-4 w-4" />,
    page: <Orders />,
  },
  {
    title: "Account",
    to: "/account",
    icon: <User className="h-4 w-4" />,
    page: <Account />,
  },
];