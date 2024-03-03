import React from "react";
import {SandboxManager} from "./SandboxManager";

export class TagListManager{
    public static _handleDropOnTagList (event: React.DragEvent){
        const eventData = JSON.parse(event.dataTransfer.getData("text"))
        if(eventData.inSandbox){
            SandboxManager._removeFromSandbox(eventData)
        }
    }
}