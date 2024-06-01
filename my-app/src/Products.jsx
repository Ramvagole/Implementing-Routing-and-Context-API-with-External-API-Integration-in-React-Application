import { useContext, useEffect, useState } from "react";
import { data } from "./Context";
import { Link } from "react-router-dom";
export function Product(){

    let {a}=useContext(data)

    return(
        <>
        {
            a.map((v,i)=>{
                return(
                    <div key={i} style={{border:"1px solid black",marginTop:"25px"}}>
                        <Link to={`/product/${v.id}`}>
                            <div>
                                    <div>
                                        <img src={v.image} />
                                    </div>
                                    <h5>Brand:{v.brand}</h5>
                                    <h5>Title:{v.title}</h5>
                                    <h5>Category:{v.category}</h5>
                                    <h5>Price:{v.price}</h5>
                            </div>                    
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}