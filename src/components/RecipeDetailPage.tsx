import { useState } from "react";
import { ArrowLeft, Clock, ChefHat, User, Heart, Star, Edit, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  recipes, 
  getRecipeCategories, 
  getRecipeIngredients, 
  getRecipeSteps,
  getUserById,
  getRecipeReviews,
  getAverageRating,
  getReviewCount,
  isFavorite,
  toggleFavorite,
  addReview,
  deleteRecipe
} from "../lib/mockData";
import { Page, UserData } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { toast } from "sonner";

interface RecipeDetailPageProps {
  recipeId: number | null;
  onNavigate: (page: Page) => void;
  currentUser: UserData;
  onRecipeClick: (recipeId: number) => void;
}

export function RecipeDetailPage({ recipeId, onNavigate, currentUser, onRecipeClick }: RecipeDetailPageProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localFavorite, setLocalFavorite] = useState(false);
  const [reviewsUpdated, setReviewsUpdated] = useState(0);
  
  const recipe = recipes.find(r => r.recipe_id === recipeId);
  
  if (!recipe) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-4">Recipe not found</p>
          <Button onClick={() => onNavigate("recipes")}>
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }

  const categories = getRecipeCategories(recipe.recipe_id);
  const ingredients = getRecipeIngredients(recipe.recipe_id);
  const steps = getRecipeSteps(recipe.recipe_id);
  const author = getUserById(recipe.user_id);
  const reviews = getRecipeReviews(recipe.recipe_id);
  const averageRating = getAverageRating(recipe.recipe_id);
  const reviewCount = getReviewCount(recipe.recipe_id);
  const favorite = isFavorite(currentUser.user_id, recipe.recipe_id);
  const isOwner = recipe.user_id === currentUser.user_id;

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

  const handleFavoriteToggle = () => {
    toggleFavorite(currentUser.user_id, recipe.recipe_id);
    setLocalFavorite(!localFavorite);
  };

  const handleSubmitReview = () => {
    if (rating === 0 || !comment.trim()) {
      toast.error("Please provide a rating and comment");
      return;
    }

    setIsSubmitting(true);
    addReview(recipe.recipe_id, currentUser.user_id, rating, comment);
    
    setTimeout(() => {
      setRating(0);
      setComment("");
      setIsSubmitting(false);
      setReviewsUpdated(prev => prev + 1);
      toast.success("Review submitted successfully!");
    }, 500);
  };

  const handleDeleteRecipe = () => {
    deleteRecipe(recipe.recipe_id);
    toast.success("Recipe deleted successfully!");
    onNavigate("my-recipes");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate("recipes")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Recipes
          </Button>
          
          <div className="flex gap-2">
            {isOwner && (
              <>
                <Button
                  variant="outline"
                  onClick={() => {
                    // Navigate to edit page (we'll handle this by setting edit mode)
                    toast.info("Edit functionality coming soon!");
                  }}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Recipe</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{recipe.title}"? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteRecipe}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
            <Button
              variant={favorite ? "default" : "outline"}
              onClick={handleFavoriteToggle}
              className={favorite ? "bg-pink-500 hover:bg-pink-600" : ""}
            >
              <Heart className={`h-4 w-4 mr-2 ${favorite ? "fill-white" : ""}`} />
              {favorite ? "Saved" : "Save Recipe"}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 bg-slate-200">
          {recipe.image && (
            <ImageWithFallback
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Badge key={category.category_id} variant="secondary">
                  {category.name}
                </Badge>
              ))}
            </div>
            <h1 className="mb-2 text-white">{recipe.title}</h1>
            <p className="text-white/90 max-w-2xl">
              {recipe.description}
            </p>
          </div>
        </div>

        {/* Recipe Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-3 p-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Time</p>
                <p className="text-slate-800">{recipe.cooking_time} min</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center gap-3 p-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <ChefHat className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Difficulty</p>
                <Badge className={getDifficultyColor(recipe.difficulty)}>
                  {recipe.difficulty}
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center gap-3 p-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <User className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Author</p>
                <p className="text-slate-800">{author?.name}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-6">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Rating</p>
                {averageRating > 0 ? (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-800">{averageRating}</span>
                    <span className="text-slate-500 text-sm">({reviewCount})</span>
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm">No reviews</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-700">{ingredient.name}</span>
                        <span className="text-slate-500">{ingredient.amount}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500 text-sm">No ingredients listed</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.length > 0 ? (
                    steps.map((step, index) => (
                      <div key={step.step_id}>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white">
                            {step.step_number}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-700">{step.instruction}</p>
                          </div>
                        </div>
                        {index < steps.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500 text-sm">No instructions available</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Reviews ({reviewCount})</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add Review */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-slate-800 mb-4">Write a Review</h3>
              
              <div className="mb-4">
                <p className="text-sm text-slate-600 mb-2">Your Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-600 mb-2">Your Comment</p>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with this recipe..."
                  rows={4}
                />
              </div>

              <Button
                onClick={handleSubmitReview}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.length > 0 ? (
                reviews.map((review) => {
                  const reviewer = getUserById(review.user_id);
                  return (
                    <div key={review.review_id} className="border-b border-slate-200 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                            {reviewer?.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="text-slate-800">{reviewer?.name}</p>
                              <p className="text-sm text-slate-500">{formatDate(review.created_at)}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-slate-500 text-center py-8">
                  No reviews yet. Be the first to review this recipe!
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
