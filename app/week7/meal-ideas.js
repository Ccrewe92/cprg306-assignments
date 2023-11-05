import React, { useState, useEffect, useCallback } from 'react';

// Define the API fetching function outside the component
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Could not fetch meals: ", error);
    return [];
  }
};

// Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  // Define state variable 'meals'
  const [meals, setMeals] = useState([]);

  // Define the loadMealIdeas function inside the component and memoize it with useCallback
  const loadMealIdeas = useCallback(async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }, [ingredient]);

  // Use useEffect to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient, loadMealIdeas]);

  // Render the component
  return (
    <div>
      <h2>Meal Ideas for &quot;{ingredient}&quot;</h2>
      <ul>
        {meals.length === 0 && <li>No meals found for &quot;{ingredient}&quot;</li>}
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
