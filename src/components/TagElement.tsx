import React, {useState} from "react";
import {TagElementManager} from "../Managers/TagElementManager";

type TagElementProps = {
    inSandbox : boolean,
    elementString: string
}

const TagElement = ({elementString, inSandbox}: TagElementProps) => {
    const [dragOver, setDragOver] = useState(false);

    const handleDragStart = (event: React.DragEvent) => {
        const draggedElement = event.currentTarget.getBoundingClientRect();
        TagElementManager._handleTagStart({
            event,
            draggedElement,
            inSandbox,
            elementString
        })
    };

    const handleDrop = (e: React.DragEvent) => {
        if(inSandbox){
            TagElementManager._handleTagMerge(e, elementString).then(() => setDragOver(false))
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        setDragOver(false)
    }

    return (
        <div
            onDragStart={(e) => handleDragStart(e)}
            draggable={true}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) =>handleDrop (e)}
            onDragOver={e => handleDragOver(e)}
            className={`border-[1px] transition cursor-pointer duration-200 hover:shadow-md hover:bg-[#f0f8fa] hover:scale-110 ${dragOver === true ? "bg-[#f0f8fa] scale-110 shadow-md" : "bg-white scale-100 shadow-none"} py-2 border-neutral-200 rounded-md bg-white px-2 `}>
            <span className={"capitalize font-bold"}>{elementString}</span>
        </div>
    );
};

export default TagElement;