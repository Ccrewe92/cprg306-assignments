"use client";
import React, { useState, useEffect } from 'react';


// Define the fetchMealIdeas function outside of the component
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

// Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  // Define the state variable 'meals' and initialize it to an empty array
  const [meals, setMeals] = useState([]);

  // Define loadMealIdeas function inside the component
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use useEffect hook to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Component's render method
  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {/* Render a list of meals */}
        {meals && meals.map(meal => (
          <li key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the MealIdeas component
export default MealIdeas;