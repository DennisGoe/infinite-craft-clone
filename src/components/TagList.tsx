import React, {useState} from "react";
import TagElement from "./TagElement";

const TagList = () => {
    const [tagList, setTagList] = useState(["earth", "wind", "fire", "water"]);
    return (
        <div className={"h-full w-full flex flex-wrap overflow-y-auto gap-x-2 items-start p-3"}>
            {
                tagList.map((elementString) => {
                    return (
                        <TagElement key={elementString} elementString={elementString} inSandbox={false}/>
                    )
                })
            }
        </div>
    )
}

export default TagList