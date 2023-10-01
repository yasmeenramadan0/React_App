import React, { useState } from 'react';
import data from './data.json';
import CardComp from './card';

function Browse() {

  let categories = Array.from(new Set(data.map((item) => item.category)));
  let [selectedCategory, setSelectedCategory] = useState('');

  let filteredCards = selectedCategory
     data.filter((item) => item.category === selectedCategory);

 let handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Filter the items based on the selected category
    filteredCards = data.filter((item) => item.category === selectedCategory);
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

export default Browse;


