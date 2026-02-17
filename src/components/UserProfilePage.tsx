import { useState } from "react";
import { User, Mail, Lock, ChefHat, Star, Heart, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { getUserRecipes, getUserFavorites, reviews } from "../lib/mockData";
import { Page, UserData } from "../App";

interface UserProfilePageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  currentUser: UserData | null;
}

export function UserProfilePage({ onNavigate, onLogout, currentUser }: UserProfilePageProps) {
  // If no current user, show error or redirect
  if (!currentUser) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-4">Please log in to view your profile</p>
          <Button onClick={() => onNavigate("login")}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Use actual logged-in user's ID for data
  const userRecipes = getUserRecipes(currentUser.user_id);
  const userFavorites = getUserFavorites(currentUser.user_id);
  const userReviews = reviews.filter(r => r.user_id === currentUser.user_id);

  const handleSaveProfile = () => {
    // In a real app, this would update the database
    alert("Profile updated successfully! (This is a demo)");
    setIsEditing(false);
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      alert("Logged out successfully! (This is a demo)");
      onNavigate("home");
    }
  };

  const totalRatingsReceived = reviews.filter(r => 
    userRecipes.some(recipe => recipe.recipe_id === r.recipe_id)
  ).length;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white text-3xl">
                  {currentUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-slate-800 mb-2">{currentUser.name}</h1>
                <p className="text-slate-600 mb-4">{currentUser.email}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <ChefHat className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Recipes</p>
                      <p className="text-slate-800">{userRecipes.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Favorites</p>
                      <p className="text-slate-800">{userFavorites.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Reviews Given</p>
                      <p className="text-slate-800">{userReviews.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Reviews Received</p>
                      <p className="text-slate-800">{totalRatingsReceived}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information and preferences</CardDescription>
              </div>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {isEditing ? (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-slate-800 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="currentPassword"
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="pl-10"
                            placeholder="Enter current password"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="pl-10"
                            placeholder="Enter new password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleSaveProfile}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsEditing(false);
                      setName(currentUser.name);
                      setEmail(currentUser.email);
                      setCurrentPassword("");
                      setNewPassword("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-600">Full Name</p>
                      <p className="text-slate-800">{currentUser.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-600">Email Address</p>
                      <p className="text-slate-800">{currentUser.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-600">Password</p>
                      <p className="text-slate-800">••••••••</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Navigate to your content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => onNavigate("my-recipes")}
              >
                <ChefHat className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-slate-800">My Recipes</p>
                  <p className="text-sm text-slate-500">{userRecipes.length} recipes</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => onNavigate("favorites")}
              >
                <Heart className="h-6 w-6 text-pink-500" />
                <div>
                  <p className="text-slate-800">My Favorites</p>
                  <p className="text-sm text-slate-500">{userFavorites.length} saved</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => onNavigate("create")}
              >
                <ChefHat className="h-6 w-6 text-purple-500" />
                <div>
                  <p className="text-slate-800">Create Recipe</p>
                  <p className="text-sm text-slate-500">Share your recipe</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
