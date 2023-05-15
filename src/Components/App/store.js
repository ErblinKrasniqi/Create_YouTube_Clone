import { configureStore, createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
    name: "menuToggle",
    initialState: false,
    reducers: {
        toggleMenu: (state) => {
            return !state;
        },
    },
});

export const { toggleMenu } = menuToggleSlice.actions;

export const store = configureStore({
    reducer: {
        menuToggle: menuToggleSlice.reducer,
    },
});