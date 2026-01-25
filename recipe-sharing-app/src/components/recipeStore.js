import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    maxTime: 999,
    filteredRecipes:[],

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
        get().filteredRecipes();    // Re-filter whenever term changes
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