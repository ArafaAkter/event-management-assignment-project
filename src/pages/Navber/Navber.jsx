
import { Link, NavLink } from "react-router-dom";
import img from '../../assets/img/user.png' ;
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navber = () => {
const{ user,logOut } = useContext(AuthContext);
const handleSignOut = () =>{
  logOut()
  .then()
  .catch()

}

  const navLinks = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/event">Event</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>

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
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </label>
        {
          user ?
          <button onClick={ handleSignOut} className="btn">Sign Out</button>
          :
          <Link to = "/login">
          <button className="btn">Login</button>
        </Link>
        }
      </div>
    </div>
  );
};

export default Navber;