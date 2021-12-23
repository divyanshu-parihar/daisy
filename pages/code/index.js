import React, { useEffect, useRef, useState } from "react";
import useData from "../_hooks/useData";
import iframe from "iframe";
import { Editor } from '../../components/editor'
const CodeEditor = () => {


    const [data, setData] = useData({ htmlcode: "<h1>Hello world</h1>", csscode: "body{background-color:#6C7A89;}", jscode: "console.log(\"hi\")" })
    const previewRef = useRef();


    // useEffect(() => {
    //     previewRef.current = iframe({ container: document.querySelector('.preview'), body: "Hello" })
    // }, [])


    return (
        <>
            {/* <div className="">
                <div className=""><input className="" onClick={onRun} type='button' value="Run" /></div>

                <div className="code">
                    <textarea className="h-30" onChange={(e) => setData(e)} value={data.htmlcode} id="htmlcode">

                    </textarea>
                    <textarea onChange={(e) => setData(e)} value={data.csscode} id="csscode">

                    </textarea>
                    <textarea onChange={(e) => setData(e)} value={data.jscode} id="jscode">

                    </textarea>
                </div>
                <div className="preview" >
                </div>
            </div> */}
            <Editor data={data} setData={setData} />


        </>
    )
}


export default CodeEditor;