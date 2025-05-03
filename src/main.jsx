// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import logoImage from './assets/companyLogo.png'


let NavBar=()=>(
  <div className='navbar'>
    <img className='logoImage' src={logoImage}></img>
    <div className='menueContainer'>
      <div className="simple-menue-btn">Home</div>
      <div className="simple-menue-btn">Contact</div>
      <div className="simple-menue-btn">About</div>
      <div className='simple-menue-btn'>Login</div>
    </div>
  </div>
)

const restaurantData = {
  restaurants: [
    {
      id: 1,
      name: "Tandoori Palace",
      cuisine: "Indian",
      rating: 4.5,
      location: "Bangalore",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 2,
      name: "Pasta Fiesta",
      cuisine: "Italian",
      rating: 4.2,
      location: "Delhi",
      isOpen: false,
      imageUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
    },
    {
      id: 3,
      name: "Dragon Bowl",
      cuisine: "Chinese",
      rating: 4.7,
      location: "Mumbai",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 4,
      name: "Burger House",
      cuisine: "American",
      rating: 4.0,
      location: "Hyderabad",
      isOpen: true,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      id: 5,
      name: "Spicy Nation",
      cuisine: "Indian",
      rating: 4.3,
      location: "Chennai",
      isOpen: false,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 6,
      name: "Sushi Zen",
      cuisine: "Japanese",
      rating: 4.8,
      location: "Kolkata",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 7,
      name: "Taco Treat",
      cuisine: "Mexican",
      rating: 4.1,
      location: "Pune",
      isOpen: true,
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
    },
    {
      id: 8,
      name: "Biryani Express",
      cuisine: "Indian",
      rating: 4.6,
      location: "Lucknow",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 9,
      name: "Green Bowl",
      cuisine: "Vegan",
      rating: 4.0,
      location: "Jaipur",
      isOpen: false,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      id: 10,
      name: "Pizza Planet",
      cuisine: "Italian",
      rating: 4.4,
      location: "Ahmedabad",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 11,
      name: "Kebab Kingdom",
      cuisine: "Middle Eastern",
      rating: 4.7,
      location: "Bhopal",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 12,
      name: "Wok This Way",
      cuisine: "Thai",
      rating: 4.3,
      location: "Surat",
      isOpen: false,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      id: 13,
      name: "Grill & Chill",
      cuisine: "Barbecue",
      rating: 4.1,
      location: "Patna",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    },
    {
      id: 14,
      name: "Roller Coaster",
      cuisine: "Street Food",
      rating: 4.2,
      location: "Nagpur",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
    },
    {
      id: 15,
      name: "The Breakfast Club",
      cuisine: "Continental",
      rating: 4.5,
      location: "Coimbatore",
      isOpen: true,
      imageUrl: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"
    }
  ]
};


let Body=()=>(
  <div className='contentContainer'>
    
   {restaurantData.restaurants.map((rest)=>{
        console.log(rest);
        return <RestCard key={rest.id}  data={rest} />
        
   } )}
   
  
  </div>
)

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

 
let AppLayout=()=>(
  <div>
    <NavBar />
    <Body />
  </div>
)
createRoot(document.getElementById('root')).render(
  <AppLayout />
)
