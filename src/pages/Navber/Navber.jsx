import { NavLink } from "react-router-dom";

const Navber = () => {

    const navLinks = <>

        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/login">Login</NavLink></li>
        <li><NavLink to ="/register">Register</NavLink></li>
    
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="text-lg font-bold bg-slate-300  rounded p-3">Social Events</div>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-2 ">
    <a className="btn btn-ghost normal-case text-lg font-bold">Login with Google</a> 
  </div>
</div>
    );
};

export default Navber;