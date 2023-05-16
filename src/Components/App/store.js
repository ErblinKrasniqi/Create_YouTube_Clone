import { configureStore, createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
  name: "menuToggle",
  initialState: false,
  reducers: {
    toggleMenu: (state) => !state,
  },
});

const selectMenuSlice = createSlice({
  name: "selectMenu",
  initialState: { value: "All" },
  reducers: {
    setMenuValue: (state, action) => {
      state.value = action.payload;
    },
  },
});



export const { toggleMenu } = menuToggleSlice.actions;
export const { setMenuValue } = selectMenuSlice.actions;

export const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice.reducer,
    selectMenu: selectMenuSlice.reducer,
  },
});
