import pizzadata from "./pizzadata";
import { useState, useEffect } from "react";
import "./pizza.css";
import PizzaCard from "./pizzacard";

const Pizza = () => {
  const [pizData, fetchdata] = useState([]);
  // const [value, setValue] = useState(0);

  useEffect(() => {
    fetchdata(pizzadata.data);
  }, []);

  return (
    <div className="allPizzas">
      {pizData.map((allpiz) => {
        return <PizzaCard data={allpiz} />;
      })}
    </div>
  );
};

export default Pizza;
