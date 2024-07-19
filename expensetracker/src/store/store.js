import {budgetReducer, expenseReducer} from "../slice/index";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        budgetReducer : budgetReducer ,
        expenseReducer: expenseReducer ,
    }
});


export default store;