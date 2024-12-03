import { createSlice } from "@reduxjs/toolkit";

const initialCounters = [
    {
        id: 1,
        value:0,
      },
      {
        id: 2,
        value:0,
      },
      {
        id: 3,
        value:0,
      }
]

const counterSlice = createSlice({
    name: "counters",
    initialState: initialCounters,
    reducers: {
        
        increment: (state, action) => {
        const countIndex = state.findIndex((item) => item.id === action.payload);
        state[countIndex].value ++;
            
        },
        decrement: (state, action) => {
            const countIndex = state.findIndex((item) => item.id === action.payload);
            if (state[countIndex].value > 0) {
                state[countIndex].value--; 
              }
        },
    }
    
})
export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions