import { useState } from "react";
import { Mail, Lock, ChefHat } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Page } from "../App";
import { toast } from "sonner";
import { findUserByEmail, createUser } from "../lib/mockData";

interface LoginPageProps {
  onNavigate: (page: Page) => void;
  onLogin: (email: string, name?: string, userId?: number) => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("sarah@example.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (email && password.length >= 6) {
      let user = findUserByEmail(email);
      
      if (!user) {
        const username = email.split('@')[0];
        const parts = username.split(/[._-]/);
        const displayName = parts
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        
        user = createUser(displayName, email, password);
        toast.success(`Welcome to RecipeHub, ${displayName}!`);
      } else {
        toast.success(`Welcome back, ${user.name}!`);
      }
      
      onLogin(email, user.name, user.user_id);
      onNavigate("home");
    } else {
      toast.error("Password must be at least 6 characters.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl shadow-lg mb-4">
            <ChefHat className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">RecipeHub</h1>
          <p className="text-slate-600">Sign in to explore 500+ delicious recipes</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl">Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your recipe account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-orange-500" />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 h-11 text-base font-medium"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => onNavigate("signup")}
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Sign up
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Guest access */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate("home")}
            className="text-slate-600 hover:text-slate-800 text-sm font-medium"
          >
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}
