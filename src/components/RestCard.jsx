let RestCard=({data})=>{

    const {imageUrl,name,rating,location,isopen}=data;
     console.log(name);
  
    return (
      <div className='cardBody'>
        <img src={imageUrl} className="restImg" />
        <h4>{name}</h4>
        <h5>{(isopen)?"open":"close"} </h5>
        <h5>rating {rating} star</h5>
        <h5>{location}</h5>
        <h5 className='simple-menue-btn'>order now</h5>
      </div>
    )
  }

  export default RestCard;