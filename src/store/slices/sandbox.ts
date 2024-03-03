import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TSandboxElement} from "../../Types/TSandboxElement";

type StateInterface = {
    elements: TSandboxElement[]
}

const initialState: StateInterface= {
    elements: []
}

const sandboxSlice = createSlice({
    name: "sandboxSlice",
    initialState,
    reducers: {
        setSandboxElements (state, action: PayloadAction<TSandboxElement[]>){
            state.elements = action.payload
        }
    }
});

export default sandboxSlice;
