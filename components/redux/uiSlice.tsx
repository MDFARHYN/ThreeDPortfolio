// components/redux/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  isFreelancer: boolean;
}

const initialState: UIState = {
  darkMode: true,
  isFreelancer: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
    },
    setIsFreelancer(state, action: PayloadAction<boolean>) {
      state.isFreelancer = action.payload;
    },
  },
});

export const { setDarkMode, setIsFreelancer } = uiSlice.actions;
export default uiSlice.reducer;
