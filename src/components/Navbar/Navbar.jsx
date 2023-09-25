<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
  <span className="absolute -inset-0.5" />
  <span className="sr-only">Open main menu</span>
  {open ? (
    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
  ) : (
    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  )}
</Disclosure.Button>;

// import React from "react";
// import "./Navbar.scss";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="nav">
//       <ul className="nav__list">
//         <li className="nav__item">
//           <NavLink
//             to="/"
//             className="nav__link"
//             style={({ isActive }) => {
//               return { color: isActive ? "#ff652f" : "inherit" };
//             }}>
//             {" "}
//             Home{" "}
//           </NavLink>
//         </li>
//         <li className="nav__item">
//           <NavLink
//             to="/about"
//             className="nav__link"
//             style={({ isActive }) => {
//               return { color: isActive ? "#ff652f" : "inherit" };
//             }}>
//             About Me
//           </NavLink>
//         </li>
//         <li className="nav__item">
//           <NavLink
//             to="/projects"
//             className="nav__link"
//             style={({ isActive }) => {
//               return { color: isActive ? "#ff652f" : "inherit" };
//             }}>
//             My Projects
//           </NavLink>
//         </li>
//         <li className="nav__item">
//           <NavLink
//             to="/contacts"
//             className="nav__link"
//             style={({ isActive }) => {
//               return { color: isActive ? "#ff652f" : "inherit" };
//             }}>
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
