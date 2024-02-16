import Service from "./Service";
import Title from "./Title";
import { useState, useEffect } from "react";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const apiUrl = "http://localhost:5000/api/services";
  
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
