import { useEffect, useState } from "react";
import { services } from "../data/services";
import { ServiceCard } from "./ServiceCard";

export const ServicesContainer = () => {
  const [serviceType, setServiceType] = useState(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 280) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="servicesContainer">
      <div
        id="banner"
        className={`pb-16 pt-6 !sticky top-32 z-10 flex ${
          headerScrolled ? "expand" : ""
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white 55%, transparent 100%)",
        }}
      >
        <h2 className="header font-bold text-center text-5xl text-black my-2">
          Our <span className="bg-jt-grad-text">Services</span>
        </h2>
        <div className="buttonbar bg-white max-w-max flex h-12 sm:h-16 flex-row flex-nowrap gap-1 items-center justify-center tabs tabs-boxed bg-transparent border-black border-4 rounded-2xl !text-black ">
          <div
            className={`btn btn-ghost normal-case border-0 text-black text-md sm:text-lg flex flex-row grow !min-h-0 h-8 sm:h-full items-center gap-2 pl-2 ${
              serviceType === 0 ? "bg-jt-grad" : ""
            }`}
            id="womensBtn"
            onClick={() => setServiceType(0)}
          >
            <div className="m-icon woman"></div>Womens
          </div>
          <div
            className={`btn btn-ghost normal-case border-0 text-black text-md sm:text-lg flex flex-row grow !min-h-0 h-8 sm:h-full items-center gap-2 pl-2 ${
              serviceType === 1 ? "bg-jt-grad" : ""
            }`}
            id="mensBtn"
            onClick={() => setServiceType(1)}
          >
            <div className="m-icon man"></div>Mens
          </div>
          <div
            className={`btn btn-ghost normal-case border-0 text-black text-md sm:text-lg flex flex-row grow !min-h-0 h-8 sm:h-full items-center gap-2 pl-4 ${
              serviceType === 2 ? "bg-jt-grad" : ""
            }`}
            id="kidsBtn"
            onClick={() => setServiceType(2)}
          >
            <div className="m-icon family"></div>Kids
          </div>
        </div>
      </div>
      <div id="serviceCardRoot" className="flex flex-col gap-2 mx-4">
        {services[
          serviceType === 0 ? "womens" : serviceType === 1 ? "mens" : "kids"
        ].map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
      <h4 className="text-lg font-medium italic text-gray-400 my-8 text-left">
        All prices subject to change. Contact us for an accurate quote.
      </h4>
    </div>
  );
};
