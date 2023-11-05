"use client";
import React, { useState, useEffect } from 'react';

// Define the fetchMealIdeas function outside of the component
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; // Return an empty array if data.meals is null
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return []; // Return an empty array in case of error
  }
};

// Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  // Define the state variable 'meals' and initialize it to an empty array
  const [meals, setMeals] = useState([]);

  // Define loadMealIdeas function inside the component
  const loadMealIdeas = async () => {
    if (ingredient) { // Ensure ingredient is not null or undefined
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } else {
      setMeals([]); // Reset the meals if no ingredient is selected
    }
  };

  // Use useEffect hook to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Component's render method
  return (
    <div>
      {/* Conditionally render this section only if there are meals to show */}
      {ingredient && meals.length > 0 && (
        <>
          <h2>Meal Ideas for {ingredient}</h2>
          <ul>
            {/* Render a list of meals */}
            {meals.map(meal => (
              <li key={meal.idMeal}>
                {meal.strMeal}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

// Export the MealIdeas component
export default MealIdeas;
