import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startEditing } from "../../slice/index";
import styles from "./TransactionPage.module.css"
import Button from "../../components/Button/Button";
import InsightsSection from "../../components/InsightsSection/InsightsSection ";
import NewExpenseSection from "../../components/NewExpenseSection/NewExpenseSection";
import { useState } from "react";

const TransactionPage = () => {
    const budget = useSelector(state => state.budget);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openExpenseSection, setOpenExpenseSection] = useState(false);
    
    const handleEditTracker = () => {
        dispatch(startEditing());
        navigate('/');
    };

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{budget.name}'s Expense Tracker</h1>
                <Button onClick={handleEditTracker} style="secondary">New/Update Tracker</Button>
            </header>
            <InsightsSection />
            <div className={styles.showbanner}>
                <h3 className={styles.header} onClick={() => setOpenExpenseSection(prevState => !prevState)}>Click here to Add New Expense</h3>

                {openExpenseSection && <NewExpenseSection />}
            </div>
        </div>
    );
    
};

export default TransactionPage;