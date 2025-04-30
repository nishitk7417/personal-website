import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="bg-gray-800 p-4 flex justify-between gap-6 text-white">
    <span className="text-2xl font-bold">Personal Website</span>
    <div className="flex gap-7">
    <NavLink to="/" className="hover:underline">About</NavLink>
    <NavLink to="/skill" className="hover:underline">Skills</NavLink>
    <NavLink to="/hobbies" className="hover:underline">Hobbies</NavLink>
    <NavLink to="/passion" className="hover:underline">Passions</NavLink>
    <NavLink to="/academic" className="hover:underline">Academics</NavLink>
    </div>
  </nav>
);

export default Navigation;
