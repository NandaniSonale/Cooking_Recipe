import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, Filter, BookOpen } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { RecipeCard } from "./RecipeCard";
import { recipes, categories, getRecipesByCategory } from "../lib/mockData";

interface RecipesPageProps {
  onRecipeClick: (recipeId: number) => void;
}

const ITEMS_PER_PAGE = 24;

export function RecipesPage({ onRecipeClick }: RecipesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter recipes based on search, category, and difficulty
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (recipe.author_name && recipe.author_name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDifficulty = selectedDifficulty === null || recipe.difficulty === selectedDifficulty;

      const matchesCategory = 
        selectedCategory === null || 
        getRecipesByCategory(selectedCategory).some(r => r.recipe_id === recipe.recipe_id);

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  
  const currentRecipes = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredRecipes.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRecipes, safeCurrentPage]);

  const handleCategoryChange = (catId: number | null) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (diff: string | null) => {
    setSelectedDifficulty(diff);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-slate-800 mb-1 text-3xl font-bold flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-orange-500" /> All Recipes ({recipes.length}+)
            </h1>
            <p className="text-slate-600">
              Explore our vast library of {recipes.length} delicious recipes prepared by top chefs around the world.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Search 500+ recipes by name, chef author (e.g. Nandani Sonale, Sanjeev Kapoor), or ingredient..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-11 h-12 text-base rounded-xl shadow-sm border-slate-200"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          {/* Categories */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Filter by Category</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg transition-all ${
                  selectedCategory === null ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-slate-100"
                }`}
                onClick={() => handleCategoryChange(null)}
              >
                All Categories ({recipes.length})
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category.category_id}
                  variant={selectedCategory === category.category_id ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1.5 text-xs rounded-lg transition-all ${
                    selectedCategory === category.category_id ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-slate-100"
                  }`}
                  onClick={() => handleCategoryChange(category.category_id)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Difficulty:
            </span>
            <div className="flex gap-2">
              <Badge
                variant={selectedDifficulty === null ? "default" : "outline"}
                className="cursor-pointer text-xs"
                onClick={() => handleDifficultyChange(null)}
              >
                All
              </Badge>
              {["Easy", "Medium", "Hard"].map((diff) => (
                <Badge
                  key={diff}
                  variant={selectedDifficulty === diff ? "default" : "outline"}
                  className="cursor-pointer text-xs"
                  onClick={() => handleDifficultyChange(diff)}
                >
                  {diff}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results count & Pagination Info */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-600 text-sm">
          <p>
            Showing <span className="font-semibold text-slate-800">{currentRecipes.length}</span> of{" "}
            <span className="font-semibold text-slate-800">{filteredRecipes.length}</span> recipes
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          {totalPages > 1 && (
            <p className="text-slate-500">
              Page <span className="font-medium text-slate-700">{safeCurrentPage}</span> of{" "}
              <span className="font-medium text-slate-700">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {currentRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe_id}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe.recipe_id)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-700 font-semibold text-lg mb-2">No matching recipes found</p>
            <p className="text-slate-500 text-sm mb-4">Try clearing your search query or changing category filters.</p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
                setSelectedDifficulty(null);
                setCurrentPage(1);
              }}
              className="bg-orange-500 text-white"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 my-8 pt-4 border-t border-slate-200">
            <Button
              variant="outline"
              size="sm"
              disabled={safeCurrentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>

            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 7) {
                  if (safeCurrentPage > 4 && safeCurrentPage < totalPages - 3) {
                    pageNum = safeCurrentPage - 3 + i;
                  } else if (safeCurrentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  }
                }
                return (
                  <Button
                    key={pageNum}
                    variant={safeCurrentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 p-0 ${
                      safeCurrentPage === pageNum ? "bg-orange-500 hover:bg-orange-600 text-white font-bold" : ""
                    }`}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={safeCurrentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="gap-1"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
