import { Button } from 'react-bootstrap';
import data from './data.json';
import CardComp from './card';
import './main.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Main() {
  const [items, setItems] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    const searchedValue = event.target.search.value.toLowerCase();
    const filteredItems = data.filter(
      (item) => item.title.toLowerCase().indexOf(searchedValue) !== -1
    );
    setItems(filteredItems);
  }

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit} id="myform">
        <Form.Control
          type="search"
          placeholder="search"
          className="me-2"
          aria-label="search"
          name="search"
        />
        <Button variant="outline-search" type="submit">
          Search
        </Button>
      </Form>
      <div id="container">
        {items.length === 0 ? (
          <p>No search results</p>
        ) : (
          items.map((item) => (
            <CardComp
              key={item.id}
              image={item.image_url}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Main;
