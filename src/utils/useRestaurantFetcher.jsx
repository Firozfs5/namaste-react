import { useState,useEffect } from "react";
const useRestaurantFetcher=()=>{

    let [restaurantData,setRestaurantData]=useState([]);
    let [permanetArray,setPermanentArray]=useState([]);

    useEffect(()=>{
      dataFetcher();
    },[])

    async function dataFetcher(){
      let data=await fetch('https://dummyjson.com/recipes');
      let json=await data.json()

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
       let filteredArray=data.filter((item)=> (item.rating)<4.3)
       console.log(filteredArray)
       setRestaurantData(filteredArray);
    }

    return [restaurantData,setRestaurantData,permanetArray,abovethen5,lessThan5]
}

export default useRestaurantFetcher;