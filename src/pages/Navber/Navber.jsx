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
    <div className="dropdown">
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {navLinks}
      </ul>
    </div>
    <div className="text-lg font-bold bg-slate-700 text-slate-100 rounded p-3">Social Events</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-2 ">
    <a className="btn btn-ghost normal-case text-lg font-bold">Login with Google</a>
    <a  className="btn btn-ghost normal-case text-lg font-bold">Login With Github</a>
    
  </div>
</div>
    );
};

export default Navber;