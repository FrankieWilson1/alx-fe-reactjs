import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
    recipes: [],
    favorites: [],
    searchTerm: '',
    maxTime: 99,
    filteredRecipes:[],
    recommendations: [],

    addFavorite: (recipeId) => {
        set(state => ({ favorites: [...state.favorites, recipeId] }));
        get().generateRecommendations();
    },

    removeFavorite: (recipeId) => {
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId)
        }));
        get().generateRecommendations();
    },
    
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            !state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended};
    }),

    // Handles filtering logic
    filterRecipes: () => {
        const { recipes, searchTerm, maxTime } = get();
        const filtered = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            Number(recipe.cookingTime || 0) <= Number(maxTime)
        );

        set({ filteredRecipes: filtered });
    },

    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();    // Re-filter whenever term changes
    },

    setMaxTime: (time) => {
        set({ maxTime: time });
        get().filterRecipes();      // Re-filter whenever time changes.
    },

    addRecipe: (newRecipe) => {
        set(state => ({ recipes: [...state.recipes, newRecipe]}));
        get().filterRecipes();
    },

    setRecipes: (recipes) => set({ recipes }),

    deleteRecipe: (id) => {
        set((state) => ({
            recipes: state.recipes.filter(recipe => recipe.id !== id)
        }));
        get().filterRecipes();
    },

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),
}));

export default useRecipeStore;