import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";


export const store = configureStore({
    reducer : {
        counter : counterSlice
    }
})