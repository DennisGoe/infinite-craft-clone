import React from "react";
import store from "../store/store";
import sandboxSlice from "../store/slices/sandbox";
import {TDragInterface} from "../Types/TDragInterface";

export class SandboxManager {
    public static _handleDropElement(event: React.DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        const element: TDragInterface = JSON.parse(event.dataTransfer.getData("text"));
        const sandboxElements = store.getState().sandbox?.elements;
        let listCopy = [...sandboxElements];

        const calcLeft = event.clientX;
        const calcTop = event.clientY;

        if (element.inSandbox) {
            const findIndex = listCopy.findIndex(listElement => listElement.elementString === element.elementString);
            if (findIndex !== -1) {
                const updatedElement = {
                    ...listCopy[findIndex],
                    left: calcLeft,
                    top: calcTop
                };

                listCopy = [
                    ...listCopy.slice(0, findIndex),
                    updatedElement,
                    ...listCopy.slice(findIndex + 1)
                ];
            }
        } else {
            const elementAlreadyInSandbox = listCopy.some(listElement => listElement.elementString === element.elementString);
            if (!elementAlreadyInSandbox) {
                listCopy.push({top: calcTop, left: calcLeft, elementString: element.elementString});
            }
        }
        store.dispatch(sandboxSlice.actions.setSandboxElements(listCopy));
    }

    public static _removeFromSandbox(eventData: any) {
        const copyList = [...store.getState().sandbox?.elements];
        const findIndex = copyList.findIndex(listElement => listElement.elementString === eventData.elementString)
        if(findIndex !== -1){
            copyList.splice(findIndex,1)
        }

        store.dispatch(sandboxSlice.actions.setSandboxElements(copyList))
    }
}