import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { RecipeCard } from "./RecipeCard";
import { recipes, categories, getRecipesByCategory } from "../lib/mockData";

interface RecipesPageProps {
  onRecipeClick: (recipeId: number) => void;
}

export function RecipesPage({ onRecipeClick }: RecipesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || 
                           getRecipesByCategory(selectedCategory).some(r => r.recipe_id === recipe.recipe_id);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-slate-800 mb-2">All Recipes</h1>
          <p className="text-slate-600">Explore our collection of delicious recipes</p>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <p className="text-slate-700 mb-3">Categories</p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category.category_id}
                variant={selectedCategory === category.category_id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.category_id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-slate-600">
            Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"}
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe_id}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe.recipe_id)}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">No recipes found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
