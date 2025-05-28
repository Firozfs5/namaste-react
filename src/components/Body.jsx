import { useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./shimmer";

import useRestaurantFetcher from "../utils/useRestaurantFetcher";

   
  let Body=()=>{
    let [searchbarText,setSearchBarText]=useState("");

    let [restaurantData,setRestaurantData,permanetArray,abovethen5,lessThan5]=useRestaurantFetcher()

    return  restaurantData.length===0?<Shimmer />:(<div>

      <div className="bg-[#EFEEEA] h-16  p-2 flex justify-between">
        <div className="flex w-100 justify-between ">
        <input 
        type="text" 
        placeholder="Enter dish Names" 
        className="bg-white h-8 self-center p-1.5 rounded w-60"  
        onChange={
          (e)=>{

            setSearchBarText(e.target.value);
          }
        }/>
        <button className="bg-[#273F4F] h-[40px] self-center text-white w-28 text-xl font-medium rounded-lg"
        onClick={()=>{
          console.log(restaurantData)
          let filteredArray=permanetArray.filter((el)=> ((el.name).toUpperCase()).includes(searchbarText.toUpperCase()))
          console.log(filteredArray);
          setRestaurantData(filteredArray)
        }
        }
        >Search</button>
        </div>
        
     <div className="w-78 flex justify-around">
     <button className="bg-[#273F4F] h-[40px] self-center text-white w-32 text-xl font-medium rounded-lg" onClick={abovethen5}>Top rated 4</button>
     <button className="bg-[#273F4F] h-[40px] self-center text-white w-32 text-xl font-medium rounded-lg" onClick={lessThan5}>Lower than 4</button>

     </div>

      </div>

    <div className="flex justify-center items-center bg-[#FBFBFB]">
    <div className='flex flex-wrap w-[1480px]'>
     {restaurantData.map((rest)=>{
          return <RestCard key={rest.id}  data={rest} />
          
     })}
     
    </div>
    </div>
 
    </div>
  )}


  export default Body;