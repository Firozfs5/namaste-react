import logoImage from '../assets/companylogo.png';
export let Navbar=()=>(
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

export default Navbar;