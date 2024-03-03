import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sandboxSlice from "./slices/sandbox";
import tagSlice from "./slices/tagSlice";

const combinedReducer = combineReducers({
    sandboxSlice: sandboxSlice.reducer,
    tagSlice: tagSlice.reducer
});

const store = configureStore({reducer: combinedReducer});

export default store;
