import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { RecipesPage } from "./components/RecipesPage";
import { RecipeDetailPage } from "./components/RecipeDetailPage";
import { CreateRecipePage } from "./components/CreateRecipePage";
import { MyRecipesPage } from "./components/MyRecipesPage";
import { FavoritesPage } from "./components/FavoritesPage";
import { UserProfilePage } from "./components/UserProfilePage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { Toaster } from "sonner";

export type Page = "home" | "recipes" | "my-recipes" | "favorites" | "create" | "detail" | "profile" | "login" | "signup";

export interface UserData {
  user_id: number;
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  const navigateToRecipe = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
    setCurrentPage("detail");
  };

  // Extract name from email: "john.doe@example.com" => "John Doe"
  const extractNameFromEmail = (email: string): string => {
    const username = email.split('@')[0];
    const parts = username.split(/[._-]/);
    return parts
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  const handleLogin = (email: string, name?: string, userId?: number) => {
    const userName = name || extractNameFromEmail(email);
    const user_id = userId || 1; // Default to user 1 if not provided
    setCurrentUser({ user_id, name: userName, email });
    setIsAuthenticated(true);
  };

  const handleSignup = (email: string, name: string, userId: number) => {
    setCurrentUser({ user_id: userId, name, email });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage("login");
  };

  const renderPage = () => {
    // Show login/signup pages if not authenticated
    if (!isAuthenticated) {
      switch (currentPage) {
        case "login":
          return <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
        case "signup":
          return <SignupPage onNavigate={setCurrentPage} onSignup={handleSignup} />;
        default:
          return <HomePage onNavigate={setCurrentPage} onRecipeClick={navigateToRecipe} />;
      }
    }

    // Show main app pages if authenticated
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} onRecipeClick={navigateToRecipe} />;
      case "recipes":
        return <RecipesPage onRecipeClick={navigateToRecipe} />;
      case "my-recipes":
        return <MyRecipesPage onRecipeClick={navigateToRecipe} onNavigate={setCurrentPage} currentUser={currentUser!} />;
      case "favorites":
        return <FavoritesPage onRecipeClick={navigateToRecipe} currentUser={currentUser!} />;
      case "create":
        return <CreateRecipePage onNavigate={setCurrentPage} currentUser={currentUser!} />;
      case "detail":
        return <RecipeDetailPage recipeId={selectedRecipeId} onNavigate={setCurrentPage} currentUser={currentUser!} onRecipeClick={navigateToRecipe} />;
      case "profile":
        return <UserProfilePage onNavigate={setCurrentPage} onLogout={handleLogout} currentUser={currentUser} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onRecipeClick={navigateToRecipe} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {isAuthenticated && currentUser && <Header currentPage={currentPage} onNavigate={setCurrentPage} currentUser={currentUser} onLogout={handleLogout} />}
      {renderPage()}
      <Toaster position="top-center" richColors />
    </div>
  );
}
