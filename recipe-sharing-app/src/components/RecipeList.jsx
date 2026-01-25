import DeleteRecipeButton from "./DeleteRecipeButton";
import useRecipeStore from "./recipeStore";
import { useNavigate, Link } from 'react-router-dom';

const RecipeList = () => {
    const navigate = useNavigate();
    const recipes = useRecipeStore(state => state.recipes);
    console.log("Current recipes in store:", recipes);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </h3>

                    <div className="actions">
                        <button onClick={() => navigate(`/edit/${recipe.id}`)}>
                            Edit Recipe ✏️
                        </button>

                        <DeleteRecipeButton recipeId={recipe.id} />
                    </div>


                </div>
            ))}
        </div>
    );
};

export default RecipeList;
