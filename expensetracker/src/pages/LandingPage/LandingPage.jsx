import { useState } from "react";
import InputField from "../../components/InputField/InputField";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    const [name, setName] = useState('');
    const [totalBudget, setTotalBudget] = useState(0);
    const [categories, setCategories] = useState({
        Food: '',
        Travel: '',
        Utilities: '',
        Other: '',
    });


    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Expense Tracker</h1>
            <form className={styles.formContainer}>
                <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <InputField label="Total Budget" value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} type="number" required />
                <InputField label="Food Budget" value={categories.Food} onChange={(e) => setCategories({ ...categories, Food: e.target.value })} type="number" required />
                <InputField label="Travel Budget" value={categories.Travel} onChange={(e) => setCategories({ ...categories, Travel: e.target.value })} type="number" required />
                <InputField label="Utilities Budget" value={categories.Utilities} onChange={(e) => setCategories({ ...categories, Utilities: e.target.value })} type="number" required />
                <InputField label="Other Budget" value={categories.Other} onChange={(e) => setCategories({ ...categories, Other: e.target.value })} type="number" required />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );

};

export default LandingPage;