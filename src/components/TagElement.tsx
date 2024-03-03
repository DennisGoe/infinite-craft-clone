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
            TagElementManager._handleTagMerge(e, elementString)
        }
    }

    return (
        <div
            onDragStart={(e) => handleDragStart(e)}
            draggable={true}
            onDrop={(e) =>handleDrop (e)}
            onDragOver={e => e.preventDefault()}
            style={{zIndex:50}}
            className={"border-[1px] transition duration-200 hover:bg-[#f0f8fa] hover:scale-125 hover:transition-colors-5 py-2 border-neutral-200 rounded-md bg-white px-2 "}>
            <span className={"capitalize font-bold"}>{elementString}</span>
        </div>
    );
};

export default TagElement;