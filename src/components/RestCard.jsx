let RestCard=({data})=>{

  // const {imageUrl,name,rating,location,isopen}=data;
    //  console.log(name);
  
    return (
      <div className='cardBody' >
        <img src={data.image} className="restImg" />
        <h4>{data.name}</h4>
        <h5>Time to parcel {data.prepTimeMinutes} </h5>
        <h5>rating {data.rating} star</h5>
        <h5>Difficulty {data.dificulty}</h5>
        <h5 className='simple-menue-btn'>order now</h5>
      </div>
    )
  }

  

  export default RestCard;