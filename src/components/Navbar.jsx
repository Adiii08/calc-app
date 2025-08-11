import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calculator</h1>

        <button onClick={() => setOpen(!open)} className="md:hidden ">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className="md:flex hidden gap-10 text-xl ">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Home
          </NavLink>
          <NavLink to="/calc" className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Calculator
          </NavLink>
          <NavLink to="/currency" className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Currency
          </NavLink>
          <NavLink to="/unit" className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Unit
          </NavLink>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden ">
           <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Home
          </NavLink>
          <NavLink to="/calc" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Calculator
          </NavLink>
          <NavLink to="/currency" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Currency
          </NavLink>
          <NavLink to="/unit" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-red-500" : ""}>
            Unit
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
