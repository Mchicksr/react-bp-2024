import { createSlice, current } from "@reduxjs/toolkit";

export const Sample1 = createSlice({
    name: "transactions",
    initialState: [],
    reducers: {
        getSample: (state, action) => {
            return action.payload;
        },
        // removeTransaction:(state,action) =>{
        //    const {id,category} = action.payload
        //    const prevState = current(state)
        //     const selectedTransaction = prevState.filter(trans=> trans.id !== id)
            
        //     return selectedTransaction
        // }
    }
}); 

export const { getSample } = Sample1.actions;
export default Sample1.reducer;