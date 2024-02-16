import Tour from "./Tour";
import Title from "./Title";
import { useState, useEffect } from "react";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl = "http://localhost:5000/api/tours";

  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setToursData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
