import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


let CardDisplay=()=>{

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

    if(resData==null){
        return ;
    } 
    
    let {name,image,ingredients,instructions}=resData;

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="Food Image" className="cardBody"/>
            <h4>Food Ingredients:</h4>
            <ul>
                {
                ingredients.map((el)=><li>{el}</li>)
                }    
            </ul>
            <h4>Making Procedure:</h4>
            <ul>
                {
                instructions.map((el)=><li>{el}</li>)
                }    
            </ul>

        </div>
    )
}

export default CardDisplay;