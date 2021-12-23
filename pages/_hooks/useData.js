import React, { useEffect, useState } from "react";


const useData = ({htmlcode='<h1>Hello world</h1>',csscode='body{background-color:"bg-lime-100;}',jscode=''}) => {
    const [data,setData] = useState({htmlcode,csscode,jscode});

    useEffect(()=>{
        console.log(data);
    },[data])
    return [
        data,(e)=>{
            setData(s=>({
                ...s,
            [e.target.id]:e.target.value,
            
            }))
        }
    ]
}

export default useData;