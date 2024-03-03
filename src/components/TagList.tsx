import React from "react";
import TagElement from "./TagElement";
import {TagListManager} from "../Managers/TaglistManager";
import {useSelector} from "react-redux";
import store from "../store/store";

const TagList = () => {
    const tagList = useSelector(() => store.getState().tagSlice?.tags)
    return (
        <div
            onDrop={(e) => TagListManager._handleDropOnTagList(e)}
            onDragOver={(e) => e.preventDefault()}
            className={"h-full w-full flex flex-wrap overflow-y-auto gap-x-2 items-start p-3 items-start"}>
            {
                tagList.map((elementString) => {
                    return (
                        <TagElement key={elementString} elementString={elementString} inSandbox={false}/>
                    );
                })
            }
        </div>
    );
};

export default TagList;