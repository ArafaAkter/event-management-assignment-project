import { Link } from "react-router-dom";

const Service = ({service}) => {

   
const {id,name,image,description,price} = service||{} 
    return (
 
    <div className="card mx-auto mt-10 gap-4 bg-slate-200 shadow-xl">
  <figure className="">
    <img src={image} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{name}</h2>
    <p>{description}</p>
    <h1 className="text-2xl font-bold">Price : {price}</h1>
   
   <div className="card-actions">
  <Link to={`/Services/${id}`}>
  <button className="btn w-60 text-xl font-bold"> SEE DETAILS</button>
  </Link>
     </div>
   
  </div>
</div>
    );
};

export default Service;