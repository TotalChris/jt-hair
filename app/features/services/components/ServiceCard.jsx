export const ServiceCard = ({ name, price, description }) => {
  return (
    <div className="stats shadow" id="cardRoot">
      <div className="bg-accent-content gap-2 bg-black bg-cover">
        <div className="w-full h-full bg-black stat">
          <div className="stat-title text-white" id="serviceName">
            {name}
          </div>
          <div className="stat-value bg-jt-grad-text" id="servicePrice">
            {price}
          </div>
          <div className="stat-desc text-neutral-300" id="serviceDescription">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
