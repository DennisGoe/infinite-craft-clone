import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TSandboxElement} from "../../Types/TSandboxElement";

type StateInterface = {
    elements: TSandboxElement[],
    merging: boolean
}

const initialState: StateInterface= {
    elements: [],
    merging: false
}

const sandboxSlice = createSlice({
    name: "sandboxSlice",
    initialState,
    reducers: {
        setSandboxElements (state, action: PayloadAction<TSandboxElement[]>){
            state.elements = action.payload
        },
        setMerging(state, action: PayloadAction<boolean>){
            state.merging = action.payload
        }
    }
});

export default sandboxSlice;
