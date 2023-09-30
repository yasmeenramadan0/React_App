import { Button } from 'react-bootstrap';
import data from './data.json';
import CardComp from './card';
import { useState } from 'react';

function Main() {
  let [items , setItems] = useState(data);

   function handleSubmit (event){
      event.prevntDefault ()
         let searchedValue = event.target.search.value;

         let filteredItems = data.filter (function(item){return item.title.tolowerCase().includes(searchedValue.tolowerCase() )} )
    setItems(filteredItems);
   }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
       <input type="text" name="search"/>

       <button type='submit'>Search</button>
    </form>
      <div id="container">
      {items.map((item) => {
        return(
      
          <CardComp image={item.image_url}  title={item.title} description={item.description} price={item.price}/>
        )
      }
      )
    }     
            </div>
          </>
        )
  

  }
export default Main;

