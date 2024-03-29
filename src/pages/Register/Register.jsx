
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {  
     const{createUser} = useContext(AuthContext)
   


    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);

        //user
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

       
      }
  
    return (
        <div>
               <div>
         <h2  className="text-center text-3xl font-bold mt-10 ">Register Now</h2>
          <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-slate-300">Register</button>
        </div>
          </form>
          <p className="text-center mx-auto font-medium ">Go to login <Link className="font-bold text-xl" to = '/login'>Login</Link></p>
         </div>
        </div>
    );
};

export default Register;