import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
    const { favorites, recipes, removeFavorite } = useRecipeStore();

    const favoriteRecipes = favorites.map(id =>
        recipes.find(recipe => recipe.id === id)
    ).filter(Boolean);

    return (
        <div className='favorites-contaner'>
            <h2>❤️My Favorites </h2>
            {favoriteRecipes.length > 0 ? (
                favoriteRecipes.map(recipe => (
                    <div key={recipe.id} className="favorite-item">
                        <h3>{recipe.title}</h3>
                        <button onClick={() => removeFavorite(recipe.id)}>
                            💔 Remove
                        </button>
                    </div>
                ))
            ) : (
                <p>No favorites yet. Start hearting some recipes!</p>
            )}
        </div>
    );
};

export default FavoritesList;