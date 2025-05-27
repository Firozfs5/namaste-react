import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
let useCardDisplayFecher=()=>{
    let [resData,setResData]=useState(null);
    let {foodID}=useParams();
    console.log(foodID)
    
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        let rawData=await fetch(`https://dummyjson.com/recipes/${foodID}`)
        let data=await rawData.json();
        console.log(data)

        setResData(data);
    }

    return resData;
}

export default useCardDisplayFecher;