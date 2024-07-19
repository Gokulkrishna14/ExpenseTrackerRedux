import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
    name : "budget",
    initialState : {
        name: '',
        totalBudget : 0,
        categories : {
            Food : 0,
            Travel : 0,
            Utilities : 0,
            Other: 0,
        },
    },
    reducers: {
        setBudget : (state, action) => {
            state.name = action.payload.name;
            state.totalBudget = action.payload.totalBudget;
            state.categories = action.payload.categories;
        },
        updateBudget : (state, action) => {
            state.categories = action.payload.categories;
        },
    },
});



export default budgetSlice;

