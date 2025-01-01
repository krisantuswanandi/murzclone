import logo from "@/assets/logo.webp";
import { MyLink } from "./sidebar-item";

const Sidebar = () => {
  return (
    <div className="fixed">
      <img src={logo} alt="logo" width="40px" />
      <div className="flex flex-col mt-8 gap-2">
        <MyLink text="Home" to="/" />
        <MyLink text="Users" to="/users" />
        <MyLink text="Talents" to="/talents" />
      </div>
    </div>
  );
};

export { Sidebar };
