import expenseSlice from "./expenseSlice";
import budgetSlice from "./budgetSlice";



export const {addExpense, deleteExpense} = expenseSlice.actions;
export const expenseReducer =  expenseSlice.reducer;
export const {setBudget, updateBudget} = budgetSlice.actions;
export const budgetReducer =  budgetSlice.reducer;