import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import CardComp from "./card";

function Products() {
  const [items, setItems] = useState([]);

  async function getMealsData() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c') 
    let data = await response.json();
    setMeals(data.meals)
    }


    async function showCategories() {
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?c=list') 
      let data = await response.json();
      setMeals(data.meals)
      }

    async function handleChange(event){
      let selectValue = event.target.value
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?c='+selectValue)
      let data = await response.json()
      setItems(data.meals)
    }

    useEffect(function(){getMealsData()
       showCategories()
  },[])
  return (
    <>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option value="all">All</option>
        {categories.map(function(category){
          return <option value={category.strCategory}>{category.strCategory} </option>
        })}
      </Form.Select>
      <div className="cardcontainer">
        {items.length !==0? ( items.map(function (item) {
            return (
              <>
              <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions} />
              </>
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
