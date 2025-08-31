import { MetaContent } from "../../shared/components/utility/MetaContent";
import { ServicesContainer } from "./ServicesContainer";

import "../styles/services.css";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <MetaContent
        title="JT Hair Care of Brighton | Services"
        description="JT Hair offers services for all hair types and styles."
      />
      <div className="min-w-screen lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto my-4 mx-8">
        <div className="pt-24 !pb-12">
          <h1 className="font-bold text-7xl p-4 text-center">
            <i className="bi bi-scissors mx-auto text-black"></i>
          </h1>
          <h2 className="font-bold text-center text-5xl lg:text-7xl text-black my-2">
            <span className="bg-jt-grad-text">Hair </span>Services
          </h2>
          <h3 className="text-center text-xl font-medium italic text-gray-500">
            Select a Category Below:
          </h3>
        </div>
        <ServicesContainer />
      </div>
    </div>
  );
};

export default ServicesPage;
