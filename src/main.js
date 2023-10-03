import { Button } from 'react-bootstrap';
import CardComp from './card';
import './main.css';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, Switch, Route } from 'react-router-dom';

function Main() {
  let [items, setItems] = useState([]);
  let [searchedValue, setSearchedValue] = useState('');

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
      setItems(result.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function () {
    getData();
  }, []);

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
      const filteredItems = data.meals.filter(function (item) {
        return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase());
      });
      setItems(filteredItems);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form className="d-flex" id="myform" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="search"
          className="me-2"
          aria-label="search"
          name="search"
          required
          onChange={(e) => setSearchedValue(e.target.value)}
        />
        <Button variant="outline-search" type="submit">
          Search
        </Button>
      </Form>
      <div id="container">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div className="container" key={item.idMeal}>
              <Link to={`/meal/${item.idMeal}`}>
                <CardComp
                  image={item.strMealThumb}
                  title={item.strMeal}
                  description={item.strInstructions}
                />
              </Link>
            </div>
          ))
        ) : (
          <h3>No Search Results</h3>
        )}
      </div>
    </>
  );
}

export default Main;
