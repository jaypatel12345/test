import { useState, useEffect } from "react";

const PizzaCard = ({ data }) => {
  const [pizsize, setpizsize] = useState([]);
  const [selectPrice, setselectPrice] = useState(500);

  useEffect(() => {
    setpizsize(data.crust[0].sizes);
  }, []);

  const handleChange = (event, pizz) => {
    let currpizID = pizz;
    let crustdt = currpizID.find(
      (crust) => crust.crustID == event.target.value
    );
    setpizsize(crustdt.sizes);
  };

  return (
    <div className="pizzaCard">
      <div className="imagediv">
        <div className="pizPrice">{selectPrice}</div>
        <img />
        {/* <img src="https://images.dominos.co.in/new_margherita_2502.jpg" /> */}
      </div>

      <div className="titleDiv">
        <h2>{data.name}</h2>
        <p>{data.crust[0].description}</p>
      </div>
      <div className="dropdowndiv">
        <select>
          {pizsize.map((option) => {
            return (
              <option value={option.crustID}>
                <p>{option.name}</p>
                <p>{option.price}</p>
              </option>
            );
          })}
        </select>

        <select onChange={(e) => handleChange(e, data.crust)}>
          {data.crust.map((option) => {
            return <option value={option.crustID}>{option.name}</option>;
          })}
        </select>
      </div>
      <div className="buttonDiv"></div>
    </div>
  );
};

export default PizzaCard;
