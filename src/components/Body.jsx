import { useState,useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./shimmer";
import {Link} from 'react-router-dom'

   
  let Body=()=>{
    let [restaurantData,setRestaurantData]=useState([]);
    let [searchbarText,setSearchBarText]=useState("");
    let [permanetArray,setPermanentArray]=useState([]);

    useEffect(()=>{
      dataFetcher();
    },[])

    async function dataFetcher(){
      let data=await fetch('https://dummyjson.com/recipes');
      let json=await data.json()

      // console.log(json);
      

      setPermanentArray(json?.recipes)
      setRestaurantData(json?.recipes);
    }


    function abovethen5(){
       let data=restaurantData
       let filteredArray=data.filter((item)=> (item.rating)>=4.4)
       console.log(filteredArray)
       setRestaurantData(filteredArray);
    }

    function lessThan5(){
      let data=restaurantData
      //  console.log(data)
       let filteredArray=data.filter((item)=> (item.rating)<4.3)
       console.log(filteredArray)
       setRestaurantData(filteredArray);
    }
 
  
    return  restaurantData.length===0?<Shimmer />:(<div>

      <span>
        <input type="text" placeholder="Enter dish Names" className="filter"  
        onChange={
          (e)=>{
            // console.log(e.target.value);
            // searchbarText=e.target.value;
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