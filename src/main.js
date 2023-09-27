 import { Button } from 'react-bootstrap';
 import data from './data.json';
import cardcomp from './card';
        function Main (){
            return ( 
            <>
            <div style={{display:"flex",flexwrap:"wrap", justifycntent:"space-between",gap:"20px",marginTop:"3%"}}>
     {data.map(function(item){
        return(
        <cardcomp image={item.image_url} title={item.title} description={item.description}/>  
        )
        
     }
     )
    }
    </div>
   </>
  )
}

export default Maim;
