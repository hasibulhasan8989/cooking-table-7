import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ wantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("Cooking.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid gap-2 grid-cols-2 w-2/3">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          wantToCook={wantToCook}
          recipe={recipe}
        ></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
