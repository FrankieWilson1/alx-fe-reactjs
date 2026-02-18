import { useState } from 'react';

// target.value
// md

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Recipe title is required.";
    
    // Ingredients validation: must not be empty and should have at least two items
    const ingredientsArray = formData.ingredients.split('\n').filter(i => i.trim() !== '');
    if (ingredientsArray.length < 2) {
      newErrors.ingredients = "Please list at least two ingredients (one per line).";
    }

    if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted Successfully:", formData);
      // Clear form and errors
      setFormData({ title: '', ingredients: '', steps: '' });
      setErrors({});
      alert("Recipe Added! (Check console for data)");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md md:p-10 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Classic Margherita Pizza"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
              errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1 italic">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Ingredients (One per line)</label>
          <textarea
            name="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="2 cups of flour&#10;3 eggs..."
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
              errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1 italic">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preparation Steps</label>
          <textarea
            name="steps"
            rows="4"
            value={formData.steps}
            onChange={handleChange}
            placeholder="1. Preheat the oven...&#10;2. Mix the ingredients..."
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
              errors.steps ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errors.steps && <p className="text-red-500 text-xs mt-1 italic">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
        >
          Post Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;