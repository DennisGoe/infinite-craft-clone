import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sandboxSlice from "./slices/sandbox";

const combinedReducer = combineReducers({
    sandbox: sandboxSlice.reducer
});

const store = configureStore({reducer: combinedReducer});

export default store;
