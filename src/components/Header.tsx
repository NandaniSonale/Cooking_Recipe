import { ChefHat, Home, BookOpen, Plus, User, Heart, UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Page, UserData } from "../App";
import { getUserFavorites } from "../lib/mockData";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  currentUser: UserData;
  onLogout?: () => void;
}

export function Header({ currentPage, onNavigate, currentUser, onLogout }: HeaderProps) {
  // Use the actual logged-in user ID for favorites
  const favoriteCount = getUserFavorites(currentUser.user_id).length;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-2 rounded-lg">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-slate-800">RecipeHub</span>
          </div>
          
          <nav className="flex items-center gap-2">
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate("home")}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button
              variant={currentPage === "recipes" ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate("recipes")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Recipes
            </Button>
            <Button
              variant={currentPage === "favorites" ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate("favorites")}
              className="relative"
            >
              <Heart className="h-4 w-4 mr-2" />
              Favorites
              {favoriteCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-500 text-white"
                >
                  {favoriteCount}
                </Badge>
              )}
            </Button>
            <Button
              variant={currentPage === "my-recipes" ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate("my-recipes")}
            >
              <User className="h-4 w-4 mr-2" />
              My Recipes
            </Button>
            <Button
              variant={currentPage === "create" ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate("create")}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create
            </Button>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2 gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline text-slate-700">{currentUser.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-2">
                  <p className="text-sm text-slate-800">{currentUser.name}</p>
                  <p className="text-xs text-slate-500">{currentUser.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate("profile")}>
                  <UserCircle className="h-4 w-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate("my-recipes")}>
                  <ChefHat className="h-4 w-4 mr-2" />
                  My Recipes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate("favorites")}>
                  <Heart className="h-4 w-4 mr-2" />
                  My Favorites
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-red-600"
                  onClick={onLogout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
