// src/redux/carSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  name: string;
  image: string;
  features: string[];
  selfDrive: {
    oneDayHour: string;
    twelveHour: string;
    sixHour: string;
    threeHour: string;
  };
}

interface CarState {
  selectedCar: Car | null;
}

const initialState: CarState = {
  selectedCar: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carSlice.actions;
export default carSlice.reducer;
