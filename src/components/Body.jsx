import RestCard from "./RestCard";
import { restaurantData } from "../assets/mockData";

    
  let Body=()=>(
    <div className='contentContainer'>
      
     {restaurantData.restaurants.map((rest)=>{
          console.log(rest);
          return <RestCard key={rest.id}  data={rest} />
          
     } )}
     
    
    </div>
  )

  export default Body;