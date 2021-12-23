import React from "react";


export const Nav =({onRun})=>{
    return (
        <div className="nav h-16 bg-[#060606] p-3 flex justify-around text-white text-4xl font-[Poppins]">
            <div className="Heading flex-2">Daisy</div>
            <input type="button" value = "Run" onClick={onRun} className="text-white bg-gray-900 hover:bg-gray-500 cursor-pointer rounded-lg px-3 text-lg" />
        </div>
    )
}