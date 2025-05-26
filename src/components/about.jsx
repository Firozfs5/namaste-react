import React from "react";
import UserClass from "./useClass";
import User from "./user";

// const About=()=>{
//     return (
//         <div>
//           <h1>Abot page</h1>
//           {/* <User name={"Firoz (function)"}/> */}
//           <UserClass name={"Firoz (class)"} />
//         </div>
//     )
// }


class About extends React.Component{

  constructor(){
    super()
      // console.log("parent constructor is called");
  }
  
  componentDidMount(){
    // console.log("parent got mounted");
    
  }

  render() {
    // console.log("parent get rendered");
    
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"p1"} />
        {/* <UserClass name={"p2"} /> */}
      </div>
    )
  }
}

export default About;