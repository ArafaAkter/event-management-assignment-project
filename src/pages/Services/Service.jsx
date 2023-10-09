
const Service = ({service}) => {

   const {name,image,description,price} = service||{} 

    return (
        <div className="card lg:card-side bg-slate-300 shadow-xl mb-5 w-10/12 mx-auto rounded">
        <figure className="w-1/2"><img src={image}className=" rounded " alt="Album"/></figure>
        <div className="card-body w-2/12">
          <h1 className="card-title font-bold text-3xl">{name}</h1>
          <p>{description}</p>
          <p className="text-2xl font-bold">{price}</p>
          <div className="card-actions justify-end">
            <button className="btn">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Service;