import React from "react";
import {TDragInterface} from "../Types/TDragInterface";
import {AIManager} from "./AIManager";
import store from "../store/store";
import sandboxSlice from "../store/slices/sandbox";
import {TagListManager} from "./TaglistManager";
import {LineManager} from "./LineManager";

export class TagElementManager {
    public static _handleTagStart({event, draggedElement, inSandbox, elementString}: TDragInterface) {
        const fullElementData = {
            inSandbox,
            elementString,
            dimensions: {
                width: draggedElement.width,
                height: draggedElement.height
            }
        };
        try {
            const stringifyElement = JSON.stringify(fullElementData);
            event.dataTransfer.setData("text", stringifyElement);
        } catch (e) {
            console.log("something went wrong...");
        }
    }

    /**
     *
     * @param dragData
     * @param dropData
     */
    public static async _handleTagMerge(dragData: React.DragEvent, secondElementString: string) {
        const stringifyDragData = JSON.parse(dragData?.dataTransfer?.getData("text"));
        const copyList = [...store.getState().sandboxSlice?.elements];

        const findFirstElementIndex = copyList.findIndex(listElement => listElement.elementString === stringifyDragData.elementString);
        const findSecondsElementIndex = copyList.findIndex(listElement => listElement.elementString === secondElementString);
        copyList.splice(findFirstElementIndex, 1);
        copyList.splice(findSecondsElementIndex, 1);

        const newAIResponse = await AIManager._generateNewTag(stringifyDragData.elementString, secondElementString);
        if (newAIResponse) {
            copyList.push({
                elementString: newAIResponse,
                left: dragData.clientX - 20,
                top: dragData.clientY
            });
        }
        store.dispatch(sandboxSlice.actions.setSandboxElements(copyList));
        LineManager._recalculateLines()
        TagListManager._addNewTag(newAIResponse)

    }
}