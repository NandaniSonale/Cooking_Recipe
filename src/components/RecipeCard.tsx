import { Clock, User, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Recipe, getRecipeCategories, getUserById, getAverageRating, getReviewCount } from "../lib/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const categories = getRecipeCategories(recipe.recipe_id);
  const author = getUserById(recipe.user_id);
  const averageRating = getAverageRating(recipe.recipe_id);
  const reviewCount = getReviewCount(recipe.recipe_id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "Hard":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-slate-200">
        {recipe.image && (
          <ImageWithFallback
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className={getDifficultyColor(recipe.difficulty)}>
            {recipe.difficulty}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-slate-800 mb-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>
        
        {averageRating > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-slate-700">{averageRating}</span>
            <span className="text-slate-500 text-sm">({reviewCount})</span>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category.category_id} variant="outline" className="text-xs">
              {category.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cooking_time} min</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="truncate max-w-[100px]">{author?.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
