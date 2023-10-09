import Service from "./Service";
const Services = ({services}) => {
    console.log(services);
    return (
        <div className="py-10">
            <div className="text-center font-bold text-4xl">Our Services</div>

        <div>
            {
              services?.map(service=><Service key={service.id} service={service}></Service>)  
            }
        </div>
  
        </div>
    );
};

export default Services;