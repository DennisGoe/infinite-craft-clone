import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StateInterface = {
    tags: string[]
}

const initialState: StateInterface= {
    tags: ["earth", "wind", "fire", "water"]
}

const tagSlice = createSlice({
    name: "tagSlice",
    initialState,
    reducers: {
        setTags (state, action: PayloadAction<string[]>){
            state.tags = action.payload
        }
    }
});

export default tagSlice;
