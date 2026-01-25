import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import { useState } from 'react';

const EditRecipeForm = () => {
    const { id } = useParams();
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const recipe = useRecipeStore(state =>
        state.recipes.find(r => r.id === Number(id))
    );

    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: Number(id), title, description});
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type='submit'>Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;