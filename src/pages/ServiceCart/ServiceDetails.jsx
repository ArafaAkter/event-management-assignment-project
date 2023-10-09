
const ServiceDetails = ({service}) => {
    const {id,name,image,description,price} = service||{}
    return (
      <div >
          <div className="card w-10/12 h-[90vh] mx-auto bg-slate-300  p-5 ">
        <figure><img src={image}/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description}</p>
          <p className="font-black">{price}</p>
          <div className="card-actions justify-center">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Order Confirm</button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ServiceDetails;