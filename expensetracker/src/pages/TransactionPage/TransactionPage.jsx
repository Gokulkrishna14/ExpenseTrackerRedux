import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableRow from  "../../components/TableRow/TableRow";
import {addExpense, deleteExpense} from "../../slice/index"
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import { useState } from "react";
import { startEditing } from "../../slice/index";

const TransactionPage = () => {
    const budget = useSelector(state => state.budget);
    const expenses = useSelector(state => state.expense);
    const [expense, setExpense] = useState({ name: '', category: 'Food', amount: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        if (parseInt(expense.amount) <= 0) return;
        const newExpense = { ...expense, id: Date.now() };
        dispatch(addExpense(newExpense));
      };
    
    const handleDeleteExpense = (id) => {
        dispatch(deleteExpense(id));
    };

    const handleEditTracker = () => {
        dispatch(startEditing());
        navigate('/');
    };

    return(
        <div>
            <header>
                <h1>{budget.name}'s Expense Tracker</h1>
                <button onClick={handleEditTracker} >New/Update Tracker</button>
            </header>
            <section>
            <h2>Insights</h2>
            <Table headers={['Category', 'Limit Status', 'Budget', 'Expense', 'Balance']}>
          {Object.keys(budget.categories).map((category) => {
            const categoryExpenses = expenses.filter((exp) => exp.category === category);
            const totalExpense = categoryExpenses.reduce((acc, exp) => acc + parseInt(exp.amount), 0);
            const isExceeded = totalExpense > budget.categories[category];
            return (
              <TableRow
                key={category}
                data={[
                  category,
                  <span style={{ color: isExceeded ? 'red' : 'green' }}>{isExceeded ? 'Exceeded' : 'Within'}</span>,
                  budget.categories[category],
                  totalExpense,
                  budget.categories[category] - totalExpense,
                ]}
              />
            );
          })}
        </Table>
            </section>
            <section>
        <h2>Add New Expense</h2>
        <form onSubmit={handleExpenseSubmit}>
          <InputField label="Expense Name" value={expense.name} onChange={(e) => setExpense({ ...expense, name: e.target.value })} required />
          <SelectField
            label="Expense Category"
            value={expense.category}
            onChange={(e) => setExpense({ ...expense, category: e.target.value })}
            options={['Food', 'Travel', 'Utilities', 'Other']}
          />
          <InputField label="Expense Amount" value={expense.amount} onChange={(e) => setExpense({ ...expense, amount: e.target.value })} type="number" required min="1" />
          <button type="submit">Add Expense</button>
        </form>
      </section>

      <section>
        <h2>Expenses</h2>
        <Table headers={['Serial Number', 'Transaction', 'Category', 'Amount', 'Action']}>
          {expenses.map((expense, index) => (
            <TableRow
              key={expense.id}
              data={[
                index + 1,
                expense.name,
                expense.category,
                expense.amount,
              ]}
              action={<button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>}
            />
          ))}
        </Table>

        </section>
        </div>
    );
    
};

export default TransactionPage;