import React, {useEffect, useState} from "react";
import {LineManager} from "../Managers/LineManager";


type LineBetweenTwoTagsProps = {
    firstTagIndex: number,
    secondTagIndex : number
}

const LineBetweenTwoTags = ({firstTagIndex,secondTagIndex}:LineBetweenTwoTagsProps) => {
    const [lineCoords, setLineCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

    const setLines = () => {
        setLineCoords(LineManager._getLinePoints(firstTagIndex,secondTagIndex))
    }

    useEffect(() => {
        setLines()
        window.addEventListener("recalcLines",setLines)
        return (() => {
            window.removeEventListener("recalcLines", setLines)
        })
    }, [firstTagIndex, secondTagIndex]);



    return (
        <div className={"z-10"}>
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <line x1={lineCoords.x1} y1={lineCoords.y1} x2={lineCoords.x2} y2={lineCoords.y2} stroke="#d1d1d1" strokeWidth="1" />
            </svg>
        </div>
    )
}

export default LineBetweenTwoTags