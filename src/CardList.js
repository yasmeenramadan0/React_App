import React, { useState } from 'react';
import data from './data.json';
import CardComp from './card';

function CardList() {
  const categories = Array.from(new Set(data.map((item) => item.category)));
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredCards, setFilteredCards] = useState(data); 

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

 
    const updatedFilteredCards = category
      ? data.filter((item) => item.category === category)
      : data;

    setFilteredCards(updatedFilteredCards);
  };

  return (
    <div>
      <div>
        <label htmlFor="categorySelect">Select Category:</label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div id="container">
        {filteredCards.map((item) => (
          <CardComp
            key={item.id}
            image={item.image_url}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;

