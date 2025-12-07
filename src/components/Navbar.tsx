import { Moon, Sun } from "lucide-react";
import type { NavbarProps } from "../types/index";

import { Link } from "react-router";

const Navbar: React.FC<NavbarProps> = ({ theme, handleTheme }) => {
  return (
    <div className="w-full h-[15vh] xl:h-[10vh] xl:px-20 flex px-5 flex-wrap items-center xl:justify-between font-semibold">
      <div className="flex items-center gap-5">
        <Link to={"/"} className="text-xl">
          Rajesh Reddy Bejadi
        </Link>
        <button className="cursor-pointer" onClick={() => handleTheme()}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
      <div className="flex gap-10">
        <Link to={"/blogs"}>Blogs</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
