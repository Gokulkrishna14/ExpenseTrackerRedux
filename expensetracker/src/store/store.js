import {budgetReducer, editReducer, expenseReducer} from "../slice/index";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        budget : budgetReducer ,
        expense: expenseReducer ,
        edit : editReducer,
    }
});


export default store;