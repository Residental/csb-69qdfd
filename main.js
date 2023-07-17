// Import necessary dependencies
const axios = require("axios");
require("dotenv").config();

// Fetch recipe data from Spoonacular API
async function fetchRecipes(query) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: process.env.SPOONACULAR_API_KEY,
          query: query,
          number: 10 // Number of recipes to fetch
        }
      }
    );

    const recipes = response.data.results;
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

// Display recipe data
function displayRecipes(recipes) {
  recipes.forEach((recipe) => {
    console.log("Title:", recipe.title);
    console.log("Image:", recipe.image);
    console.log("Link:", recipe.sourceUrl);
    console.log("---");
  });
}

// Example usage
const searchQuery = "chicken"; // User input for recipe search
fetchRecipes(searchQuery)
  .then((recipes) => {
    displayRecipes(recipes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
