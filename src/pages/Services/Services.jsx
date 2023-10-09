import Service from "./Service";
const Services = ({services}) => {
    console.log(services);
    return (
        <div className="py-10">
            <div className="text-center font-bold text-4xl">Our Services</div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {
              services?.map(service=><Service key={service.id} service={service}></Service>)  
            }
        </div>
  
        </div>
    );
};

export default Services;