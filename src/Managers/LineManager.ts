import store from "../store/store";

export class LineManager {
    public static _getLinePoints(firstTagIndex: number, secondTagIndex: number) {
        const x1 = store.getState().sandboxSlice?.elements[firstTagIndex]?.left + 5;
        const y1 = store.getState().sandboxSlice?.elements[firstTagIndex]?.top + 10;

        const x2 = store.getState().sandboxSlice?.elements[secondTagIndex]?.left + 5;
        const y2 = store.getState().sandboxSlice?.elements[secondTagIndex]?.top + 10;

        return {x1, y1, x2, y2};
    }

    public static _calculateLineList() {
        const sandboxElements = store.getState().sandboxSlice?.elements
        let result = []
        if(sandboxElements.length > 1){
            for(let i = 0; i < sandboxElements?.length; i++){
                let secondIndex = 0
                if(i + 1 < sandboxElements.length){
                   secondIndex = i + 1
                }
                else {
                    secondIndex = 0
                }
                result.push({firstTagIndex:i, secondTagIndex:secondIndex})
            }
        }
        return result
    }

    public static _recalculateLines () {
        const customEvent = new CustomEvent("recalcLines")
        window.dispatchEvent(customEvent)
    }
}