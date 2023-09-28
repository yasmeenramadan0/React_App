import { Button } from 'react-bootstrap';
import data from './data.json';
import CardComp from './card';

function Main() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
          marginTop: '3%',
        }}
      >
        {data.map((item) => (
          
          <CardComp
            image={item.image_url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Main;

