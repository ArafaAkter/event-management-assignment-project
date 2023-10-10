import { Link } from "react-router-dom";

const ExtraSection = () => {
  return (
    <div>
      <h1 className=" text-center font-bold text-4xl m-10 ">Others Services </h1>
      <div className="hero bg-slate-300 mb-10 w-10/12 mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6 font-bold">For Log in press Login..!</p>
            <Link to="/Contact"><button className="btn">Contact Us</button></Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ExtraSection;