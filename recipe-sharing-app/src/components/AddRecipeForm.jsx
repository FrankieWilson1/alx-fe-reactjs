import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cookingTime, setCookingTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({
            id: Date.now(),
            title,
            description,
            cookingTime: Number(cookingTime)
        });
        setTitle('');
        setDescription('');
        setCookingTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tittle"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <input
                type="number"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                placeholder="Cooking time (mins)"
                min='1'
            />
            <button type="submit">Add Reciep</button>
        </form>
    );
};

export default AddRecipeForm;