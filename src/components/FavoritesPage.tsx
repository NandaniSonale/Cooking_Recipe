import { Heart } from "lucide-react";
import { RecipeCard } from "./RecipeCard";
import { getUserFavorites } from "../lib/mockData";
import { UserData } from "../App";

interface FavoritesPageProps {
  onRecipeClick: (recipeId: number) => void;
  currentUser: UserData;
}

export function FavoritesPage({ onRecipeClick, currentUser }: FavoritesPageProps) {
  const favoriteRecipes = getUserFavorites(currentUser.user_id);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-3 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-slate-800">Favorite Recipes</h1>
          </div>
          <p className="text-slate-600">
            You have {favoriteRecipes.length} {favoriteRecipes.length === 1 ? "favorite" : "favorites"}
          </p>
        </div>

        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRecipes.map((recipe) => (
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
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-slate-800 mb-2">No favorites yet</h3>
              <p className="text-slate-600 mb-6">
                Start exploring recipes and save your favorites for quick access
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
