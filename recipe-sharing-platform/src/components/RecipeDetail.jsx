import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe that matches the ID from the URL
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-10 text-center text-xl">Recipe not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-12">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        {/* Hero Section */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-72 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 italic mb-8">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ingredients Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredients</h2>
              <ul className="space-y-3">
                {/* Fallback if JSON doesn't have ingredients yet */}
                {(recipe.ingredients || ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']).map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Cooking Steps</h2>
              <ol className="space-y-6">
                {(recipe.instructions || ['Step 1: Prep', 'Step 2: Cook', 'Step 3: Serve']).map((step, index) => (
                  <li key={index} className="flex">
                    <span className="font-bold text-blue-600 mr-4 text-xl">{index + 1}.</span>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;