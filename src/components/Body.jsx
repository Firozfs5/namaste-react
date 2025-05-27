import { useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./shimmer";
import {Link} from 'react-router-dom'
import useRestaurantFetcher from "../utils/useRestaurantFetcher";

   
  let Body=()=>{
    let [searchbarText,setSearchBarText]=useState("");

    let [restaurantData,setRestaurantData,permanetArray,abovethen5,lessThan5]=useRestaurantFetcher()

    return  restaurantData.length===0?<Shimmer />:(<div>

      <span>
        <input type="text" placeholder="Enter dish Names" className="filter"  
        onChange={
          (e)=>{

            setSearchBarText(e.target.value);
          }
        }/>
        <button className="filter"
        onClick={()=>{
          console.log(restaurantData)
          let filteredArray=permanetArray.filter((el)=> ((el.name).toUpperCase()).includes(searchbarText.toUpperCase()))
          console.log(filteredArray);
          setRestaurantData(filteredArray)

        }
        }
        >Search</button>
      </span>

     <button className="filter" onClick={abovethen5}>top rated 4</button>

     <button className="filter" onClick={lessThan5}>lower than 4</button>

    <div className='contentContainer'>
     {restaurantData.map((rest)=>{
          return <Link to={"/resource/"+rest.id} key={rest.id} ><RestCard   data={rest} /></Link>
     })}
     
    </div>
 
    </div>
  )}


  export default Body;