import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import CardComp from "./card";

function Products() {
  const [items, setItems] = useState([]);
  const [changedValue, setChangedValue] = useState("all");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = 'https://themealdb.p.rapidapi.com/filter.php';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cbf102398cmsh73cabdd2421f49fp175a90jsn9f8b0cf4a716',
        'X-RapidAPI-Host': 'themealdb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setItems(result.results || []); // استخدام قيمة افتراضية للمصفوفة إذا لم يتم استرجاع البيانات بشكل صحيح
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = 'https://themealdb.p.rapidapi.com/filter.php';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cbf102398cmsh73cabdd2421f49fp175a90jsn9f8b0cf4a716',
        'X-RapidAPI-Host': 'themealdb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      let filteredItems = [];

      if (changedValue === "all") {
        filteredItems = data.results || []; // استخدام قيمة افتراضية للمصفوفة إذا لم يتم استرجاع البيانات بشكل صحيح
      } else {
        filteredItems = data.results.filter(function (item) {
          return item.price.value > changedValue - 10 && item.price.value <= changedValue;
        });
      }
      setItems(filteredItems);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    setChangedValue(event.target.value);
  }

  let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option value="all">All</option>
        {prices.map(function (price) {
          return <option value={price}>{price - 10}$ - {price}$</option>;
        })}
      </Form.Select>
      <div className="container">
        {items.length > 0 ? (
          items.map(function (item) {
            return (
              <CardComp image={item.images[0].baseUrl} title={item.name} price={item.price.value} />
            );
          })
        ) : (
          <h3>No results</h3>
        )}
      </div>
    </>
  );
}

export default Products;
