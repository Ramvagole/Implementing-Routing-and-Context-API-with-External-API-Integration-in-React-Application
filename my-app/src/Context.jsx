import { createContext } from "react"
import { useEffect,useState } from "react"
 

 export let data=createContext()
 export function Context({children}){
    let [b,set]=useState({})
    let [a,setval]=useState([])
    function detail(i){
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${i}`).
        then((res)=>res.json()).
        then((res)=>{set(res.data)})
    }
    function fetchData(){
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").
        then((res)=>res.json()).
        then((res)=>{setval(res.data)})
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <data.Provider value={{a,b,fetchData,detail}}>
            {children}
        </data.Provider>
    )
 }