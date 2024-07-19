import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState : [],
    reducers : {
        addExpense : (state, action) => {
            state.push(action.payload);
        },
        deleteExpense : (state, action) => {
            state.filter(expense => expense.id !== action.payload);
        },
    },
});

export default expenseSlice;