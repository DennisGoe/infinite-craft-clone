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
        const listCopy = [...sandboxElements];

        // const rect = event.currentTarget.getBoundingClientRect();

        // const calcLeft = rect.left + window.scrollX;
        // const calcTop = rect.top + window.scrollY;

        const calcLeft = event.clientX;
        const calcTop = event.clientY;

        listCopy.push({top: calcTop, left: calcLeft, elementString: element.elementString});
        store.dispatch(sandboxSlice.actions.setSandboxElements(listCopy));
    }
}