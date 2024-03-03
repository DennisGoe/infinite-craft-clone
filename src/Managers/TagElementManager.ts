import {TDragInterface} from "../Types/TDragInterface";

export class TagElementManager {
    public static _handleTagStart ({event,draggedElement, inSandbox, elementString}: TDragInterface) {
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
            console.log("something went wrong...")
        }
    }
}