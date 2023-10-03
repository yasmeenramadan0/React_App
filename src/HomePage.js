import React, { useState, useEffect } from 'react';
import CardComp from './card';
import { getMealsByFirstLetter } from './api';

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealsByFirstLetter('m').then((meals) => setMeals(meals));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
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

export default HomePage;
