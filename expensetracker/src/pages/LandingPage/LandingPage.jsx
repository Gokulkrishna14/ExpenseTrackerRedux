import { useState } from "react";
import InputField from "../../components/InputField/InputField";
import styles from "./LandingPage.module.css";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, updateBudget } from "../../slice";
import { useNavigate } from "react-router-dom";
import { stopEditing } from "../../slice";

const LandingPage = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState('');
    const [totalBudget, setTotalBudget] = useState(0);
    const [categories, setCategories] = useState({
        Food: '',
        Travel: '',
        Utilities: '',
        Other: '',
    });
    const isEditable = useSelector(state => state.edit.isEditable);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = parseInt(totalBudget);

        const categoryTotal = Object.values(categories).reduce((sum, value) => sum + parseInt(value), 0);

        if(categoryTotal > total){
            enqueueSnackbar("Total Categorical budget should not exceed monthly budget", { variant: 'error' });
            return;
        }

        if (categoryTotal < total) {
            categories.Other = (parseInt(categories.Other) + (total - categoryTotal)).toString();
        }

        const budget = {
            name,
            totalBudget: total,
            categories,
        };

        if (isEditable) {
            dispatch(updateBudget(budget));
        } else {
            dispatch(setBudget(budget));
        }
      
        dispatch(stopEditing());
      
        enqueueSnackbar("Budget Added Successfully , Navigating to Transaction Page", {variant: "success"});
        setTimeout(() => {
            navigate('/transaction');
        }, 500); 
    }

    const handleNewTracker = () => {
        dispatch(stopEditing());
        navigate('/');
    };
    
    const handleGoBack = () => {
        navigate('/transaction');
    };


    return(
        <div className={styles.container}>
            <h1>{isEditable ? "Update Your Budget" : "Expense Tracker Setup"}</h1>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} min />
                <InputField label="Total Budget" value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} type="number" min="1" />
                <InputField label="Food Budget" value={categories.Food} onChange={(e) => setCategories({ ...categories, Food: e.target.value })} type="number" min="0" />
                <InputField label="Travel Budget" value={categories.Travel} onChange={(e) => setCategories({ ...categories, Travel: e.target.value })} type="number" min="0" />
                <InputField label="Utilities Budget" value={categories.Utilities} onChange={(e) => setCategories({ ...categories, Utilities: e.target.value })} type="number" min="0" />
                <InputField label="Other Budget" value={categories.Other} onChange={(e) => setCategories({ ...categories, Other: e.target.value })} type="number" min="0" />
                {isEditable ? (
                    <div>
                        <button onClick={handleSubmit}>Update Budget</button>
                        <button onClick={handleNewTracker}>New Tracker</button>
                        <button onClick={handleGoBack}>Go Back</button>
                    </div>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </form>
        </div>
    );

};

export default LandingPage;