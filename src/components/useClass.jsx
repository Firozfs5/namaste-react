import React from "react";
import Shimmer from "./shimmer";

class UserClass extends React.Component{
     
    constructor(props){
        super(props)

        this.state={
            useData:null
        }

        // console.log(this.props.name+" constructor is called");
        
    }

    async componentDidMount(){
        console.log(this.props.name+" child constructor is mounted");
        const rawData=await fetch('https://api.github.com/users/Firozfs5');
        let data=await rawData.json();
        console.log(data);
        this.setState({
            useData:data
        })
        

        
    }

    componentDidUpdate(){
        console.log("yes it got ann update");
        
    }

    render() {

        // console.log(this.props.name+" child is rendered");   
        
        // let {name}=this.props;
        let {useData}=this.state;
        
        if(useData==null) return <Shimmer />
        return (
            <div className="user-comp">
            <h3>Name:{useData.login}</h3>
            <img src={useData.avatar_url} className="login-photo" alt="" />
            <p>Location:Hassan</p>
            <p>Contact:9743496958</p>
            </div>
        )
    }
}

export default UserClass;