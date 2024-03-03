import React from "react";
import {TagElementManager} from "../Managers/TagElementManager";

type TagElementProps = {
    inSandbox : boolean,
    elementString: string
}

const TagElement = ({elementString, inSandbox}: TagElementProps) => {

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
            className={"border-[1px] border-neutral-200 rounded-md bg-white px-2 z-20"}>
            <span className={"capitalize font-bold"}>{elementString}</span>
        </div>
    );
};

export default TagElement;