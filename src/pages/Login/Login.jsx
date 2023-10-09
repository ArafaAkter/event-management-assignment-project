import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    console.log(form);
  }


    return (
        <div> 
         <div>
         <h2  className="text-center text-3xl font-bold mt-10 ">Login Now</h2>
          <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-slate-300">Login</button>
        </div>
          </form>
          <p className="text-center mx-auto font-medium ">Go to register <Link className="font-bold text-xl" to = '/register'>Register</Link></p>
         </div>
      </div>
    );
};

export default Login;