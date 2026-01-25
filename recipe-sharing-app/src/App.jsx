import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/edit/:id' element={<EditRecipeForm />} />
        <Route path="/test" element={<h1>Router is working </h1>} />
      </Routes>
    </Router>
  );
}

export default App
