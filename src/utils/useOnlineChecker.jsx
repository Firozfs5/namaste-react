import {useState,useEffect} from "react";
const useOnlineChecker=()=>{

  let [isOnline,setIsOnline]=useState(true);

  useEffect(()=>{
    window.addEventListener('online',()=>{
        setIsOnline(true);
    })
    window.addEventListener("offline",()=>{
        setIsOnline(false);
    })
  },[])

  return isOnline;
}

export default useOnlineChecker;