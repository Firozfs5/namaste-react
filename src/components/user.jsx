import { useState } from "react";

const User=({name})=>{
    let [count]=useState(0);
    return (
        <div className="user-comp">
            <h1>Count : {count}</h1>
            <h3>Name:{name}</h3>
            <p>Location:Hassan</p>
            <p>Contact:9743496958</p>
        </div>
    )
}

export default User;