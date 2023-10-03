import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardComp from './card';
import { setMeals } from './main';

function Main () {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedCategegory, setSelectedCategory]=useState("All")

  async function getMealsData() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    let data = await response.json();
    setMeals(data.meals)
  }

  async function handleSubmit (event){
    event.preventDefault();
    let searchedValue = event.target.search.value
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'+searchvalue)
    let data = await response.json();
    setItems(data.meals);

  }
  async function handleSubmit(event) {
    event.preventDefault();
    const searchedValue = event.target.search.value;
    const filteredItems = result.results.filter(function (item) {
      return item.name.toLowerCase().includes(searchedValue.toLowerCase());
    });
    if (filteredItems.length !== 0) {
      setItems(filteredItems);
    } else {
      return <h3>No search results</h3>;
    }
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <>
      <Form className="d-flex" id="myform" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
          required
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      <div className="cardcontainer">
        {items.length !== 0 ? (
          items.map(function (item, index) {
            return (
              <CardComp
                key={index}
                image={item.images[0].baseUrl}
                title={item.name}
                price={item.price.value}
                showFavorites={true}
              />
            );
          })
        ) : (
          <h3>No search results</h3>
        )}
      </div>
    </>
  );
}

export default Main;
export { setMeals };
