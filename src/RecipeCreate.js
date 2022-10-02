import React from 'react'
import "./App.css";

function RecipeCreate({formData, handleChange, handleSubmit}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>

            <td>
              <label htmlFor="name">
                Name:
                <input 
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>

            <td>
              <label htmlFor="cuisine">
                Cuisine:
                <input 
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>

            <td>
              <label htmlFor="photo">
                Photo:
                <input 
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>

            <td>
              <label htmlFor="ingredients">
                Ingredients:
                <textarea 
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                Preparation:
                <textarea 
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>

          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
