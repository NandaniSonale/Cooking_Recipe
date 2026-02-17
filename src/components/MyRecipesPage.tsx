import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { RecipeCard } from "./RecipeCard";
import { getUserRecipes } from "../lib/mockData";
import { Page, UserData } from "../App";

interface MyRecipesPageProps {
  onRecipeClick: (recipeId: number) => void;
  onNavigate: (page: Page) => void;
  currentUser: UserData;
}

export function MyRecipesPage({ onRecipeClick, onNavigate, currentUser }: MyRecipesPageProps) {
  const myRecipes = getUserRecipes(currentUser.user_id);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-slate-800 mb-2">My Recipes</h1>
            <p className="text-slate-600">
              You have created {myRecipes.length} {myRecipes.length === 1 ? "recipe" : "recipes"}
            </p>
          </div>
          <Button
            onClick={() => onNavigate("create")}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Recipe
          </Button>
        </div>

        {myRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe_id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.recipe_id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-slate-800 mb-2">No recipes yet</h3>
              <p className="text-slate-600 mb-6">
                Start sharing your culinary creations with the community
              </p>
              <Button
                onClick={() => onNavigate("create")}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
              >
                Create Your First Recipe
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
