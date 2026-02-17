import { ChefHat, Clock, TrendingUp, Star, BookOpen, Users } from "lucide-react";
import { Button } from "./ui/button";
import { RecipeCard } from "./RecipeCard";
import { recipes, reviews, users } from "../lib/mockData";
import { Page } from "../App";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onRecipeClick: (recipeId: number) => void;
}

export function HomePage({ onNavigate, onRecipeClick }: HomePageProps) {
  const featuredRecipes = recipes.slice(0, 3);
  const quickRecipes = recipes.filter(r => r.cooking_time <= 20);
  const popularRecipes = recipes.slice(3, 7);

  // Calculate dynamic stats
  const totalRecipes = recipes.length;
  const totalReviews = reviews.length;
  const totalActiveCooks = users.length;
  
  // Count contributors (users who have created at least one recipe)
  const contributorIds = new Set(recipes.map(r => r.user_id));
  const totalContributors = contributorIds.size;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1729774091978-9811d5541a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwa2l0Y2hlbiUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyMjQ0NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-pink-50/90" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ChefHat className="h-5 w-5 text-orange-500" />
              <span className="text-slate-600">Your Digital Recipe Collection</span>
            </div>
            <h1 className="mb-6 text-slate-800">
              Discover, Create & Share
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                Delicious Recipes
              </span>
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our community of food lovers. Browse thousands of recipes, save your favorites, and share your culinary creations with the world.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("recipes")}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
              >
                Browse Recipes
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("create")}
              >
                Create Recipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-slate-800 mb-1">{totalRecipes}</div>
              <p className="text-slate-600">Recipes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4">
                <Star className="h-6 w-6 text-pink-600" />
              </div>
              <div className="text-slate-800 mb-1">{totalReviews}</div>
              <p className="text-slate-600">Reviews</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-slate-800 mb-1">{totalActiveCooks}</div>
              <p className="text-slate-600">Active Cooks</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-slate-800 mb-1">{totalContributors}</div>
              <p className="text-slate-600">Contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-slate-800 mb-2">Featured Recipes</h2>
              <p className="text-slate-600">Hand-picked by our culinary experts</p>
            </div>
            <Button variant="outline" onClick={() => onNavigate("recipes")}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe_id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.recipe_id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-800">Popular Recipes</h2>
              <p className="text-slate-600">Most loved by our community</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe_id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.recipe_id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick & Easy Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-800">Quick & Easy</h2>
              <p className="text-slate-600">Ready in 20 minutes or less</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickRecipes.slice(0, 4).map((recipe) => (
              <RecipeCard
                key={recipe.recipe_id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.recipe_id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-12 text-white">
            <h2 className="mb-4">Ready to Start Cooking?</h2>
            <p className="mb-8 text-orange-50">
              Join thousands of home cooks sharing their favorite recipes
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate("create")}
            >
              Share Your Recipe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
