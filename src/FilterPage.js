import React, { useState, useEffect } from 'react';
import CardComp from './card';
import { getMealsByName } from './api';

const FilterPage = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMealsByName(searchTerm).then((meals) => setMeals(meals));
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMealsByName(searchTerm).then((meals) => setMeals(meals));
  };

  return (
    <div>
      <h1>Filter Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <CardComp image={meal.thumbnailUrl} title={meal.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPage;
