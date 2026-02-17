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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Demo login - in a real app, this would authenticate with a backend
    if (email && password.length >= 6) {
      // Check if user exists in the system
      let user = findUserByEmail(email);
      
      // If user doesn't exist, create them for demo purposes
      if (!user) {
        // Extract name from email for display
        const username = email.split('@')[0];
        const parts = username.split(/[._-]/);
        const displayName = parts
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        
        user = createUser(displayName, email, password);
        toast.success("Login successful! Welcome!");
      } else {
        toast.success("Login successful! Welcome back!");
      }
      
      onLogin(email, user.name, user.user_id);
      onNavigate("home");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl mb-4">
            <ChefHat className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-slate-800 mb-2">Welcome Back</h1>
          <p className="text-slate-600">Sign in to continue to Recipe Manager</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
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
                    placeholder="you@example.com"
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
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => onNavigate("signup")}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>

            {/* Demo Account Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Demo Mode:</strong> Use any email and password (min 6 characters)
              </p>
              <p className="text-xs text-blue-700 mt-2">
                Try existing accounts: sarah@example.com, michael@example.com, or emma@example.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate("home")}
            className="text-slate-600 hover:text-slate-800 text-sm"
          >
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}
