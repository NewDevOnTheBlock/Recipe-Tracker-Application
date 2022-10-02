import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      formData,
    ])
    setFormData({...initialFormState})
  }

  const handleDelete = (idToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== idToDelete)
    );
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header>
        <h1 >Delicious Food Recipes</h1>
      </header>
      <RecipeList 
        recipes={recipes}
        handleDelete={handleDelete}
      />
      <RecipeCreate 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
