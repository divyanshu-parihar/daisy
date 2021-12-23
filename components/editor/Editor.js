import React from "react";
import Split from "react-split";
import 'tailwindcss/tailwind.css';
import iframe from "iframe";
import { useEffect, useRef } from "react/cjs/react.development";


import {Nav} from "../nav";
export const Editor = ({ data, setData}) => {
    const previewDiv = useRef();
    const onRun = (e) => {
        console.log(data.htmlcode + "<style>" + data.csscode + "</style>" + "<script>" + data.jscode + "</script>");
        previewDiv.current.setHTML({
            name: "preview",
            body: data.htmlcode + "<style>" + data.csscode + "</style>" + "<script>" + data.jscode + "</script>",
        })
    }
    useEffect(()=>{
        previewDiv.current = iframe({ container: document.querySelector('.preview'), body: "<h1>Hello world</h1><style>body{background-color:#6C7A89;}</style><script>console.log(\"hi\")</script>" })
    },[])
    return (
        <div>
        <Nav onRun={onRun}/>
        <Split direction='vertical' cursor="col-resize" style={{ height: `calc(100vh - 4rem)` }}> {/* Change calc function to add sizing for another component*/}
            <Split className='flex'>
                <div className=''><textarea onChange={(e) => setData(e)} value={data.htmlcode} className="bg-[#1D1E22] text-white border-none p-1" style={{ height: "100%", width: "100%", resize: "none", caretColor: "whitesmoke" }} id="htmlcode" ></textarea></div>
                <div className=''><textarea onChange={(e) => setData(e)} value={data.csscode} className="bg-[#1D1E22] text-white border-none p-1" style={{ height: "100%", width: "100%", resize: "none", caretColor: "whitesmoke" }} id="csscode" ></textarea></div>
                <div className=''><textarea onChange={(e) => setData(e)} value={data.jscode} className="bg-[#1D1E22] text-white border-none p-1" style={{ height: "100%", width: "100%", resize: "none", caretColor: "whitesmoke" }} id='jscode' ></textarea></div>
            </Split>
            <div className='preview bg-white-100'></div>
        </Split>
        </div>
    )
}
