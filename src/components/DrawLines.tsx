import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {LineManager} from "../Managers/LineManager";
import LineBetweenTwoTags from "./LineBetweenTwoTags";
import store from "../store/store";

const DrawLines = () => {
    const [lineList, setLineList] = useState<any[]>([]);
    const sandBoxElements = useSelector(() => store.getState().sandboxSlice?.elements)


    const recalcLines = () => {
        setLineList(LineManager._calculateLineList())
    }

    useEffect(() => {
        recalcLines()
    }, [sandBoxElements]);

    return (
        <>
            {
            lineList?.map((line,index) => {
                return (
                    <LineBetweenTwoTags key={index} firstTagIndex={line.firstTagIndex} secondTagIndex={line.secondTagIndex}/>
                )
            })    
        }
        </>
    )
    
}
export default DrawLines