import React from "react";
import {SandboxManager} from "./SandboxManager";
import store from "../store/store";
import tagSlice from "../store/slices/tagSlice";

export class TagListManager{
    public static _handleDropOnTagList (event: React.DragEvent){
        const eventData = JSON.parse(event.dataTransfer.getData("text"))
        if(eventData.inSandbox){
            SandboxManager._removeFromSandbox(eventData)
        }
    }

    public static _addNewTag (elementString: string | null){
        if(!elementString) return
        const tagListCopy = [...store.getState().tagSlice?.tags]
        if(!tagListCopy.includes(elementString)){
            tagListCopy.push(elementString)
        }
        store.dispatch(tagSlice.actions.setTags(tagListCopy))
    }
}