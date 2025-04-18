import { House, Notepad } from "phosphor-react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 ${
    isActive ? "text-blue-400" : "text-white"
  } hover:text-blue-400`;

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-zinc-800 py-2">
      <ul className="flex mx-auto text-sm list-none gap-6">
        <li id="nav-home">
          <NavLink to="/" className={navLinkClass}>
            <House size={20} /> Home
          </NavLink>
        </li>
        <li id="nav-blog">
          <NavLink to="/blog" className={navLinkClass}>
            <Notepad size={20} /> Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
