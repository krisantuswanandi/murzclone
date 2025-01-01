import logo from "@/assets/logo.webp";
import { SidebarItem } from "./sidebar-item";
import { IconHome, IconBriefcase, IconUsers } from "@tabler/icons-react";
import { ReactNode } from "react";

interface Menu {
  id: string;
  label: string;
  icon: ReactNode;
  url: string;
}

const menus: Menu[] = [
  { id: "home", label: "Home", icon: <IconHome />, url: "/" },
  { id: "users", label: "Users", icon: <IconUsers />, url: "/users" },
  { id: "talents", label: "Talents", icon: <IconBriefcase />, url: "/talents" },
];

const Sidebar = () => {
  return (
    <div className="fixed">
      <img src={logo} alt="logo" width="40px" />
      <div className="flex flex-col mt-14 gap-8">
        {menus.map((menu) => (
          <SidebarItem
            key={menu.id}
            to={menu.url}
            text={menu.label}
            icon={menu.icon}
          />
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
