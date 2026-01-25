import DeleteRecipeButton from "./DeleteRecipeButton";
import useRecipeStore from "./recipeStore";
import { useNavigate, Link } from 'react-router-dom';

const RecipeList = () => {
    const navigate = useNavigate();

    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const recipes = useRecipeStore(state => state.recipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    const displayList = searchTerm ? filteredRecipes : recipes;

    // console.log("Current recipes in store:", recipes);

    return (
        <div>
            <h2>Recipes</h2>
            {displayList.map(recipe => (
                <div key={recipe.id}>
                    <h3>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </h3>

                    {/* buttons ... */}
                    <div className="actions">
                        <button onClick={() => navigate(`/edit/${recipe.id}`)}>
                            Edit Recipe ✏️
                        </button>

                        <DeleteRecipeButton recipeId={recipe.id} />
                    </div>
                    <p>⏱️ {recipe.cookingTime} mins</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
