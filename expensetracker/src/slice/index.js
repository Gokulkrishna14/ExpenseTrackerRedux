import expenseSlice from "./expenseSlice";
import budgetSlice from "./budgetSlice";
import editSlice from "./editSlice";


export const {addExpense, deleteExpense} = expenseSlice.actions;
export const expenseReducer =  expenseSlice.reducer;
export const {setBudget, updateBudget} = budgetSlice.actions;
export const budgetReducer =  budgetSlice.reducer;
export const {startEditing , stopEditing} = editSlice.actions;
export const editReducer = editSlice.reducer;