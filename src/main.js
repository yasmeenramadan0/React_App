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
let response; 
response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
const data = await response.json();
setItems(data.meals)
 }

 

  async function handleSubmit (event){
event.preventDefault();
const searchedValue = event.target.search.value
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=t"
const response = await fetch(url);
const data = await response.json();
const filteredItems = data.meals.filter(function (item) {
return item.name.toLowerCase().includes(searchedValue.toLowerCase());
});
setItems(filteredItems);
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
} }

 

  useEffect(function () {
 getMealsData();
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
<div className="cardContainer">
{items.length !== 0 ? (
items.map(function (item) {
return (
<CardComp
image={item.strMealThumb}
title={item.strMeal}
description={item.strInstructions}
FavoriteView={true}
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