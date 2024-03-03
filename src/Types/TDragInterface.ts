import React from "react";

export type TDragInterface = {
    event: React.DragEvent,
    draggedElement : DOMRect,
    inSandbox: boolean,
    elementString: string
}