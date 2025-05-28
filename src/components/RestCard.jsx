import {Link} from 'react-router-dom'
let RestCard=({data})=>{

  // const {imageUrl,name,rating,location,isopen}=data;
    //  console.log(name);
  
    return (
      <div className='bg-[#EAEFEF] w-57 m-2 p-3 rounded' >
        <img src={data.image} className="w-[100%] h-[150px] rounded-lg"  />
        <h4 className="font-semibold my-2">{data.name}</h4>
        <h5>Time to parcel {data.prepTimeMinutes} </h5>
        <h5>rating {data.rating} star</h5>
        <h5>Difficulty {data.dificulty}</h5>
        <h5 className='bg-black text-center text-white p-1.5 w-[50%] rounded-lg my-1.5 font-medium'><Link to={"/resource/"+data.id}  >Order Now</Link></h5>
      </div>
    )
  }

  

  export default RestCard;