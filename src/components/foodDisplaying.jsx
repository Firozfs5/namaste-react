import useCardDisplayFecher from "../utils/useCardDisplayFetcher";
let CardDisplay=()=>{

    let resData=useCardDisplayFecher();

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