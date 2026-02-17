export interface User {
  user_id: number;
  name: string;
  email: string;
  password: string;
}

export interface Recipe {
  recipe_id: number;
  title: string;
  description: string;
  cooking_time: number;
  difficulty: "Easy" | "Medium" | "Hard";
  user_id: number;
  image?: string;
}

export interface Ingredient {
  ingredient_id: number;
  name: string;
  quantity: string;
  unit: string;
}

export interface RecipeIngredient {
  recipe_id: number;
  ingredient_id: number;
  amount: string;
}

export interface Step {
  step_id: number;
  recipe_id: number;
  step_number: number;
  instruction: string;
}

export interface Category {
  category_id: number;
  name: string;
}

export interface RecipeCategory {
  recipe_id: number;
  category_id: number;
}

export interface Review {
  review_id: number;
  recipe_id: number;
  user_id: number;
  rating: number;
  comment: string;
  created_at: string;
}

export interface Favorite {
  user_id: number;
  recipe_id: number;
  created_at: string;
}

// Mock Data
export const currentUser: User = {
  user_id: 1,
  name: "Sarah Johnson",
  email: "sarah@example.com",
  password: "hashed_password",
};

export const users: User[] = [
  currentUser,
  { user_id: 2, name: "Michael Chen", email: "michael@example.com", password: "hashed_password" },
  { user_id: 3, name: "Emma Davis", email: "emma@example.com", password: "hashed_password" },
];

export const categories: Category[] = [
  { category_id: 1, name: "Breakfast" },
  { category_id: 2, name: "Lunch" },
  { category_id: 3, name: "Dinner" },
  { category_id: 4, name: "Dessert" },
  { category_id: 5, name: "Vegetarian" },
  { category_id: 6, name: "Vegan" },
  { category_id: 7, name: "Gluten-Free" },
  { category_id: 8, name: "Quick & Easy" },
];

export const recipes: Recipe[] = [
  {
    recipe_id: 1,
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh tomatoes, mozzarella, and basil",
    cooking_time: 30,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
  },
  {
    recipe_id: 2,
    title: "Blueberry Pancakes",
    description: "Fluffy pancakes loaded with fresh blueberries and served with maple syrup",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80",
  },
  {
    recipe_id: 3,
    title: "Thai Green Curry",
    description: "Aromatic and spicy Thai curry with coconut milk and vegetables",
    cooking_time: 45,
    difficulty: "Medium",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
  },
  {
    recipe_id: 4,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey molten center",
    cooking_time: 25,
    difficulty: "Hard",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
  },
  {
    recipe_id: 5,
    title: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing",
    cooking_time: 15,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
  },
  {
    recipe_id: 6,
    title: "Chicken Tikka Masala",
    description: "Tender chicken in a rich, creamy tomato-based curry sauce",
    cooking_time: 50,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
  },
  {
    recipe_id: 7,
    title: "Avocado Toast",
    description: "Simple and healthy smashed avocado on toasted sourdough",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
  },
  {
    recipe_id: 8,
    title: "Beef Tacos",
    description: "Seasoned ground beef in crispy taco shells with fresh toppings",
    cooking_time: 25,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
  },
  {
    recipe_id: 9,
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish with porcini mushrooms and parmesan",
    cooking_time: 40,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?w=800&q=80",
  },
  {
    recipe_id: 10,
    title: "French Toast",
    description: "Classic breakfast with cinnamon-spiced eggy bread",
    cooking_time: 15,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
  },
  {
    recipe_id: 11,
    title: "Pad Thai",
    description: "Traditional Thai stir-fried noodles with peanuts and lime",
    cooking_time: 30,
    difficulty: "Medium",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80",
  },
  {
    recipe_id: 12,
    title: "Apple Pie",
    description: "Classic American dessert with flaky crust and cinnamon apples",
    cooking_time: 60,
    difficulty: "Hard",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=80",
  },
  {
    recipe_id: 13,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta, olives, and tomatoes",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
  },
  {
    recipe_id: 14,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in puff pastry with mushroom duxelles",
    cooking_time: 90,
    difficulty: "Hard",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=800&q=80",
  },
  {
    recipe_id: 15,
    title: "Smoothie Bowl",
    description: "Healthy breakfast bowl with blended fruits and toppings",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },
  {
    recipe_id: 16,
    title: "Sushi Rolls",
    description: "Japanese rice rolls with fresh fish and vegetables",
    cooking_time: 45,
    difficulty: "Hard",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
  },
  {
    recipe_id: 17,
    title: "Minestrone Soup",
    description: "Hearty Italian vegetable soup with pasta and beans",
    cooking_time: 35,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
  },
  {
    recipe_id: 18,
    title: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    recipe_id: 19,
    title: "Tiramisu",
    description: "Classic Italian coffee-flavored layered dessert",
    cooking_time: 30,
    difficulty: "Medium",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
  },
  {
    recipe_id: 20,
    title: "Falafel Wrap",
    description: "Middle Eastern chickpea fritters in pita with tahini sauce",
    cooking_time: 25,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
  },
  {
    recipe_id: 21,
    title: "Beef Stir Fry",
    description: "Quick Asian-style beef with vegetables in savory sauce",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
  },
  {
    recipe_id: 22,
    title: "Croissant",
    description: "Flaky, buttery French pastry perfect for breakfast",
    cooking_time: 120,
    difficulty: "Hard",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    recipe_id: 23,
    title: "Shrimp Scampi",
    description: "Garlic butter shrimp with white wine and lemon",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800&q=80",
  },
  {
    recipe_id: 24,
    title: "Vegetable Curry",
    description: "Spiced Indian curry with mixed vegetables and coconut milk",
    cooking_time: 35,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  },
  {
    recipe_id: 25,
    title: "Cheesecake",
    description: "Rich and creamy New York style cheesecake",
    cooking_time: 90,
    difficulty: "Medium",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
  },
  {
    recipe_id: 26,
    title: "Ramen Bowl",
    description: "Japanese noodle soup with pork, egg, and flavorful broth",
    cooking_time: 60,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
  },
  {
    recipe_id: 27,
    title: "Caprese Salad",
    description: "Simple Italian salad with tomatoes, mozzarella, and basil",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80",
  },
  {
    recipe_id: 28,
    title: "Pulled Pork Sandwich",
    description: "Slow-cooked BBQ pork on a toasted bun",
    cooking_time: 240,
    difficulty: "Medium",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
  },
  {
    recipe_id: 29,
    title: "Hummus",
    description: "Creamy Middle Eastern chickpea dip with tahini",
    cooking_time: 15,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1571368542875-88dcbe9c5e10?w=800&q=80",
  },
  {
    recipe_id: 30,
    title: "Lasagna",
    description: "Layered Italian pasta with meat sauce and cheese",
    cooking_time: 90,
    difficulty: "Medium",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80",
  },
  {
    recipe_id: 31,
    title: "Banana Bread",
    description: "Moist and sweet quick bread made with ripe bananas",
    cooking_time: 60,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
  },
  {
    recipe_id: 32,
    title: "Pho",
    description: "Vietnamese beef noodle soup with aromatic herbs",
    cooking_time: 120,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80",
  },
  {
    recipe_id: 33,
    title: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken and parmesan sauce",
    cooking_time: 30,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&q=80",
  },
  {
    recipe_id: 34,
    title: "Brownies",
    description: "Fudgy chocolate brownies with a crackly top",
    cooking_time: 35,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80",
  },
  {
    recipe_id: 35,
    title: "Paella",
    description: "Spanish rice dish with seafood, chicken, and saffron",
    cooking_time: 60,
    difficulty: "Hard",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80",
  },
  {
    recipe_id: 36,
    title: "Eggs Benedict",
    description: "Poached eggs with Canadian bacon and hollandaise sauce",
    cooking_time: 25,
    difficulty: "Hard",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
  },
  {
    recipe_id: 37,
    title: "Quinoa Bowl",
    description: "Healthy grain bowl with roasted vegetables and tahini",
    cooking_time: 30,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    recipe_id: 38,
    title: "Meatballs",
    description: "Italian-style meatballs in tomato sauce",
    cooking_time: 45,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
  },
  {
    recipe_id: 39,
    title: "Waffles",
    description: "Crispy Belgian waffles perfect for breakfast",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80",
  },
  {
    recipe_id: 40,
    title: "Fish Tacos",
    description: "Crispy fish with cabbage slaw and lime crema",
    cooking_time: 30,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
  },
  {
    recipe_id: 41,
    title: "Beef Bourguignon",
    description: "French beef stew braised in red wine with vegetables",
    cooking_time: 150,
    difficulty: "Hard",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1600289031464-74d374b64991?w=800&q=80",
  },
  {
    recipe_id: 42,
    title: "Chia Pudding",
    description: "Healthy overnight pudding with chia seeds and berries",
    cooking_time: 5,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    recipe_id: 43,
    title: "Chicken Parmesan",
    description: "Breaded chicken cutlet with marinara and melted cheese",
    cooking_time: 40,
    difficulty: "Medium",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
  },
  {
    recipe_id: 44,
    title: "Guacamole",
    description: "Fresh Mexican avocado dip with lime and cilantro",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1609525313344-a56b96f20718?w=800&q=80",
  },
  {
    recipe_id: 45,
    title: "Beef Chili",
    description: "Hearty American chili with beans and spices",
    cooking_time: 60,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&q=80",
  },
  {
    recipe_id: 46,
    title: "Crème Brûlée",
    description: "French custard dessert with caramelized sugar top",
    cooking_time: 60,
    difficulty: "Hard",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
  },
  {
    recipe_id: 47,
    title: "Bibimbap",
    description: "Korean rice bowl with vegetables, egg, and gochujang",
    cooking_time: 40,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&q=80",
  },
  {
    recipe_id: 48,
    title: "Grilled Salmon",
    description: "Perfectly grilled salmon fillet with lemon and herbs",
    cooking_time: 20,
    difficulty: "Easy",
    user_id: 2,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
  },
  {
    recipe_id: 49,
    title: "Chocolate Chip Cookies",
    description: "Classic American cookies with melty chocolate chips",
    cooking_time: 25,
    difficulty: "Easy",
    user_id: 3,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
  },
  {
    recipe_id: 50,
    title: "Chicken Enchiladas",
    description: "Mexican rolled tortillas with chicken, cheese, and sauce",
    cooking_time: 45,
    difficulty: "Medium",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1730878423239-0fd430bbac37?w=800&q=80",
  },
  {
    recipe_id: 51,
    title: "Hummus",
    description: "Creamy Middle Eastern chickpea dip with tahini and lemon",
    cooking_time: 10,
    difficulty: "Easy",
    user_id: 1,
    image: "https://images.unsplash.com/photo-1601053856244-b0790f493169?w=800&q=80",
  },
];

export const ingredients: Ingredient[] = [
  { ingredient_id: 1, name: "Flour", quantity: "500", unit: "g" },
  { ingredient_id: 2, name: "Tomato", quantity: "4", unit: "pcs" },
  { ingredient_id: 3, name: "Mozzarella", quantity: "200", unit: "g" },
  { ingredient_id: 4, name: "Basil", quantity: "10", unit: "leaves" },
  { ingredient_id: 5, name: "Blueberries", quantity: "200", unit: "g" },
  { ingredient_id: 6, name: "Eggs", quantity: "2", unit: "pcs" },
  { ingredient_id: 7, name: "Milk", quantity: "250", unit: "ml" },
  { ingredient_id: 8, name: "Coconut Milk", quantity: "400", unit: "ml" },
  { ingredient_id: 9, name: "Green Curry Paste", quantity: "3", unit: "tbsp" },
  { ingredient_id: 10, name: "Chocolate", quantity: "200", unit: "g" },
  { ingredient_id: 11, name: "Butter", quantity: "100", unit: "g" },
  { ingredient_id: 12, name: "Sugar", quantity: "100", unit: "g" },
  { ingredient_id: 13, name: "Romaine Lettuce", quantity: "1", unit: "head" },
  { ingredient_id: 14, name: "Parmesan Cheese", quantity: "50", unit: "g" },
  { ingredient_id: 15, name: "Croutons", quantity: "100", unit: "g" },
  { ingredient_id: 16, name: "Caesar Dressing", quantity: "100", unit: "ml" },
  { ingredient_id: 17, name: "Chicken Breast", quantity: "500", unit: "g" },
  { ingredient_id: 18, name: "Yogurt", quantity: "200", unit: "g" },
  { ingredient_id: 19, name: "Tomato Paste", quantity: "2", unit: "tbsp" },
  { ingredient_id: 20, name: "Heavy Cream", quantity: "200", unit: "ml" },
  { ingredient_id: 21, name: "Garam Masala", quantity: "2", unit: "tsp" },
  { ingredient_id: 22, name: "Ginger", quantity: "1", unit: "inch" },
  { ingredient_id: 23, name: "Garlic", quantity: "4", unit: "cloves" },
  { ingredient_id: 24, name: "Onion", quantity: "1", unit: "large" },
  { ingredient_id: 25, name: "Avocado", quantity: "2", unit: "ripe" },
  { ingredient_id: 26, name: "Sourdough Bread", quantity: "4", unit: "slices" },
  { ingredient_id: 27, name: "Lemon Juice", quantity: "1", unit: "tbsp" },
  { ingredient_id: 28, name: "Red Pepper Flakes", quantity: "1", unit: "tsp" },
  { ingredient_id: 29, name: "Ground Beef", quantity: "500", unit: "g" },
  { ingredient_id: 30, name: "Taco Shells", quantity: "8", unit: "pcs" },
  { ingredient_id: 31, name: "Taco Seasoning", quantity: "2", unit: "tbsp" },
  { ingredient_id: 32, name: "Lettuce", quantity: "1", unit: "cup" },
  { ingredient_id: 33, name: "Cheddar Cheese", quantity: "100", unit: "g" },
  { ingredient_id: 34, name: "Sour Cream", quantity: "100", unit: "ml" },
  { ingredient_id: 35, name: "Salsa", quantity: "100", unit: "ml" },
  { ingredient_id: 36, name: "Arborio Rice", quantity: "300", unit: "g" },
  { ingredient_id: 37, name: "Mushrooms", quantity: "200", unit: "g" },
  { ingredient_id: 38, name: "White Wine", quantity: "100", unit: "ml" },
  { ingredient_id: 39, name: "Bread", quantity: "6", unit: "slices" },
  { ingredient_id: 40, name: "Cinnamon", quantity: "1", unit: "tsp" },
  { ingredient_id: 41, name: "Rice Noodles", quantity: "200", unit: "g" },
  { ingredient_id: 42, name: "Peanuts", quantity: "50", unit: "g" },
  { ingredient_id: 43, name: "Lime", quantity: "2", unit: "pcs" },
  { ingredient_id: 44, name: "Apples", quantity: "6", unit: "pcs" },
  { ingredient_id: 45, name: "Pie Crust", quantity: "2", unit: "pcs" },
  { ingredient_id: 46, name: "Feta Cheese", quantity: "100", unit: "g" },
  { ingredient_id: 47, name: "Olives", quantity: "100", unit: "g" },
  { ingredient_id: 48, name: "Cucumber", quantity: "1", unit: "large" },
  { ingredient_id: 49, name: "Beef Filet", quantity: "800", unit: "g" },
  { ingredient_id: 50, name: "Puff Pastry", quantity: "500", unit: "g" },
  { ingredient_id: 51, name: "Banana", quantity: "2", unit: "pcs" },
  { ingredient_id: 52, name: "Berries", quantity: "200", unit: "g" },
  { ingredient_id: 53, name: "Sushi Rice", quantity: "300", unit: "g" },
  { ingredient_id: 54, name: "Nori Sheets", quantity: "6", unit: "pcs" },
  { ingredient_id: 55, name: "Salmon", quantity: "200", unit: "g" },
  { ingredient_id: 56, name: "Beans", quantity: "400", unit: "g" },
  { ingredient_id: 57, name: "Pasta", quantity: "200", unit: "g" },
  { ingredient_id: 58, name: "Ground Beef", quantity: "500", unit: "g" },
  { ingredient_id: 59, name: "Burger Buns", quantity: "4", unit: "pcs" },
  { ingredient_id: 60, name: "Mascarpone", quantity: "250", unit: "g" },
  { ingredient_id: 61, name: "Ladyfingers", quantity: "200", unit: "g" },
  { ingredient_id: 62, name: "Coffee", quantity: "200", unit: "ml" },
  { ingredient_id: 63, name: "Chickpeas", quantity: "400", unit: "g" },
  { ingredient_id: 64, name: "Tahini", quantity: "100", unit: "ml" },
  { ingredient_id: 65, name: "Cumin", quantity: "1", unit: "tsp" },
  { ingredient_id: 66, name: "Pita Bread", quantity: "4", unit: "pcs" },
  { ingredient_id: 67, name: "Bell Pepper", quantity: "2", unit: "pcs" },
  { ingredient_id: 68, name: "Soy Sauce", quantity: "50", unit: "ml" },
  { ingredient_id: 69, name: "Shrimp", quantity: "400", unit: "g" },
  { ingredient_id: 70, name: "Cream Cheese", quantity: "500", unit: "g" },
  { ingredient_id: 71, name: "Graham Crackers", quantity: "200", unit: "g" },
  { ingredient_id: 72, name: "Ramen Noodles", quantity: "200", unit: "g" },
  { ingredient_id: 73, name: "Pork Belly", quantity: "300", unit: "g" },
  { ingredient_id: 74, name: "Egg", quantity: "4", unit: "pcs" },
  { ingredient_id: 75, name: "Pork Shoulder", quantity: "1500", unit: "g" },
  { ingredient_id: 76, name: "BBQ Sauce", quantity: "200", unit: "ml" },
  { ingredient_id: 77, name: "Coleslaw Mix", quantity: "200", unit: "g" },
  { ingredient_id: 78, name: "Lasagna Sheets", quantity: "12", unit: "pcs" },
  { ingredient_id: 79, name: "Ricotta", quantity: "250", unit: "g" },
  { ingredient_id: 80, name: "Baking Powder", quantity: "2", unit: "tsp" },
  { ingredient_id: 81, name: "Vanilla Extract", quantity: "1", unit: "tsp" },
  { ingredient_id: 82, name: "Beef Bones", quantity: "1000", unit: "g" },
  { ingredient_id: 83, name: "Star Anise", quantity: "2", unit: "pcs" },
  { ingredient_id: 84, name: "Fettuccine", quantity: "400", unit: "g" },
  { ingredient_id: 85, name: "Cocoa Powder", quantity: "50", unit: "g" },
  { ingredient_id: 86, name: "Saffron", quantity: "1", unit: "g" },
  { ingredient_id: 87, name: "Seafood Mix", quantity: "400", unit: "g" },
  { ingredient_id: 88, name: "Canadian Bacon", quantity: "8", unit: "slices" },
  { ingredient_id: 89, name: "English Muffins", quantity: "4", unit: "pcs" },
  { ingredient_id: 90, name: "Quinoa", quantity: "200", unit: "g" },
  { ingredient_id: 91, name: "Ground Pork", quantity: "300", unit: "g" },
  { ingredient_id: 92, name: "Marinara Sauce", quantity: "400", unit: "ml" },
  { ingredient_id: 93, name: "Waffle Mix", quantity: "300", unit: "g" },
  { ingredient_id: 94, name: "White Fish", quantity: "400", unit: "g" },
  { ingredient_id: 95, name: "Cabbage", quantity: "200", unit: "g" },
  { ingredient_id: 96, name: "Carrots", quantity: "2", unit: "pcs" },
  { ingredient_id: 97, name: "Red Wine", quantity: "500", unit: "ml" },
  { ingredient_id: 98, name: "Chia Seeds", quantity: "50", unit: "g" },
  { ingredient_id: 99, name: "Almond Milk", quantity: "300", unit: "ml" },
  { ingredient_id: 100, name: "Breadcrumbs", quantity: "100", unit: "g" },
  { ingredient_id: 101, name: "Cilantro", quantity: "20", unit: "g" },
  { ingredient_id: 102, name: "Kidney Beans", quantity: "400", unit: "g" },
  { ingredient_id: 103, name: "Chili Powder", quantity: "2", unit: "tbsp" },
  { ingredient_id: 104, name: "Egg Yolk", quantity: "6", unit: "pcs" },
  { ingredient_id: 105, name: "Gochujang", quantity: "2", unit: "tbsp" },
  { ingredient_id: 106, name: "Spinach", quantity: "100", unit: "g" },
  { ingredient_id: 107, name: "Dill", quantity: "10", unit: "g" },
  { ingredient_id: 108, name: "Chocolate Chips", quantity: "200", unit: "g" },
  { ingredient_id: 109, name: "Brown Sugar", quantity: "150", unit: "g" },
  { ingredient_id: 110, name: "Tortillas", quantity: "8", unit: "pcs" },
  { ingredient_id: 111, name: "Enchilada Sauce", quantity: "400", unit: "ml" },
];

export const recipeIngredients: RecipeIngredient[] = [
  // Recipe 1: Classic Margherita Pizza
  { recipe_id: 1, ingredient_id: 1, amount: "300g" },
  { recipe_id: 1, ingredient_id: 2, amount: "3 pcs" },
  { recipe_id: 1, ingredient_id: 3, amount: "200g" },
  { recipe_id: 1, ingredient_id: 4, amount: "8 leaves" },
  
  // Recipe 2: Blueberry Pancakes
  { recipe_id: 2, ingredient_id: 1, amount: "200g" },
  { recipe_id: 2, ingredient_id: 5, amount: "150g" },
  { recipe_id: 2, ingredient_id: 6, amount: "2 pcs" },
  { recipe_id: 2, ingredient_id: 7, amount: "200ml" },
  
  // Recipe 3: Thai Green Curry
  { recipe_id: 3, ingredient_id: 8, amount: "400ml" },
  { recipe_id: 3, ingredient_id: 9, amount: "3 tbsp" },
  
  // Recipe 4: Chocolate Lava Cake
  { recipe_id: 4, ingredient_id: 10, amount: "200g" },
  { recipe_id: 4, ingredient_id: 11, amount: "100g" },
  { recipe_id: 4, ingredient_id: 12, amount: "100g" },
  { recipe_id: 4, ingredient_id: 6, amount: "3 pcs" },
  
  // Recipe 5: Caesar Salad
  { recipe_id: 5, ingredient_id: 13, amount: "1 head" },
  { recipe_id: 5, ingredient_id: 14, amount: "50g" },
  { recipe_id: 5, ingredient_id: 15, amount: "100g" },
  { recipe_id: 5, ingredient_id: 16, amount: "100ml" },
  
  // Recipe 6: Chicken Tikka Masala
  { recipe_id: 6, ingredient_id: 17, amount: "500g" },
  { recipe_id: 6, ingredient_id: 18, amount: "200g" },
  { recipe_id: 6, ingredient_id: 19, amount: "2 tbsp" },
  { recipe_id: 6, ingredient_id: 20, amount: "200ml" },
  { recipe_id: 6, ingredient_id: 21, amount: "2 tsp" },
  { recipe_id: 6, ingredient_id: 22, amount: "1 inch" },
  { recipe_id: 6, ingredient_id: 23, amount: "4 cloves" },
  { recipe_id: 6, ingredient_id: 24, amount: "1 large" },
  { recipe_id: 6, ingredient_id: 2, amount: "2 pcs" },
  
  // Recipe 7: Avocado Toast
  { recipe_id: 7, ingredient_id: 25, amount: "2 ripe" },
  { recipe_id: 7, ingredient_id: 26, amount: "4 slices" },
  { recipe_id: 7, ingredient_id: 27, amount: "1 tbsp" },
  { recipe_id: 7, ingredient_id: 28, amount: "1/2 tsp" },
  
  // Recipe 8: Beef Tacos
  { recipe_id: 8, ingredient_id: 29, amount: "500g" },
  { recipe_id: 8, ingredient_id: 30, amount: "8 pcs" },
  { recipe_id: 8, ingredient_id: 31, amount: "2 tbsp" },
  { recipe_id: 8, ingredient_id: 32, amount: "1 cup" },
  { recipe_id: 8, ingredient_id: 2, amount: "2 pcs" },
  { recipe_id: 8, ingredient_id: 33, amount: "100g" },
  { recipe_id: 8, ingredient_id: 34, amount: "100ml" },
  { recipe_id: 8, ingredient_id: 35, amount: "100ml" },
  
  // Recipe 9: Mushroom Risotto
  { recipe_id: 9, ingredient_id: 36, amount: "300g" },
  { recipe_id: 9, ingredient_id: 37, amount: "200g" },
  { recipe_id: 9, ingredient_id: 38, amount: "100ml" },
  { recipe_id: 9, ingredient_id: 14, amount: "50g" },
  
  // Recipe 10: French Toast
  { recipe_id: 10, ingredient_id: 39, amount: "6 slices" },
  { recipe_id: 10, ingredient_id: 6, amount: "3 pcs" },
  { recipe_id: 10, ingredient_id: 7, amount: "100ml" },
  { recipe_id: 10, ingredient_id: 40, amount: "1 tsp" },
  
  // Recipe 11: Pad Thai
  { recipe_id: 11, ingredient_id: 41, amount: "200g" },
  { recipe_id: 11, ingredient_id: 42, amount: "50g" },
  { recipe_id: 11, ingredient_id: 43, amount: "2 pcs" },
  { recipe_id: 11, ingredient_id: 69, amount: "200g" },
  
  // Recipe 12: Apple Pie
  { recipe_id: 12, ingredient_id: 44, amount: "6 pcs" },
  { recipe_id: 12, ingredient_id: 45, amount: "2 pcs" },
  { recipe_id: 12, ingredient_id: 40, amount: "2 tsp" },
  { recipe_id: 12, ingredient_id: 12, amount: "150g" },
  
  // Recipe 13: Greek Salad
  { recipe_id: 13, ingredient_id: 2, amount: "3 pcs" },
  { recipe_id: 13, ingredient_id: 46, amount: "100g" },
  { recipe_id: 13, ingredient_id: 47, amount: "100g" },
  { recipe_id: 13, ingredient_id: 48, amount: "1 large" },
  
  // Recipe 14: Beef Wellington
  { recipe_id: 14, ingredient_id: 49, amount: "800g" },
  { recipe_id: 14, ingredient_id: 50, amount: "500g" },
  { recipe_id: 14, ingredient_id: 37, amount: "200g" },
  { recipe_id: 14, ingredient_id: 74, amount: "1 pc" },
  
  // Recipe 15: Smoothie Bowl
  { recipe_id: 15, ingredient_id: 51, amount: "2 pcs" },
  { recipe_id: 15, ingredient_id: 52, amount: "200g" },
  { recipe_id: 15, ingredient_id: 99, amount: "200ml" },
  
  // Recipe 16: Sushi Rolls
  { recipe_id: 16, ingredient_id: 53, amount: "300g" },
  { recipe_id: 16, ingredient_id: 54, amount: "6 pcs" },
  { recipe_id: 16, ingredient_id: 55, amount: "200g" },
  { recipe_id: 16, ingredient_id: 48, amount: "1 large" },
  
  // Recipe 17: Minestrone Soup
  { recipe_id: 17, ingredient_id: 56, amount: "400g" },
  { recipe_id: 17, ingredient_id: 57, amount: "100g" },
  { recipe_id: 17, ingredient_id: 2, amount: "3 pcs" },
  { recipe_id: 17, ingredient_id: 96, amount: "2 pcs" },
  
  // Recipe 18: Beef Burger
  { recipe_id: 18, ingredient_id: 58, amount: "500g" },
  { recipe_id: 18, ingredient_id: 59, amount: "4 pcs" },
  { recipe_id: 18, ingredient_id: 32, amount: "1 cup" },
  { recipe_id: 18, ingredient_id: 2, amount: "2 pcs" },
  
  // Recipe 19: Tiramisu
  { recipe_id: 19, ingredient_id: 60, amount: "250g" },
  { recipe_id: 19, ingredient_id: 61, amount: "200g" },
  { recipe_id: 19, ingredient_id: 62, amount: "200ml" },
  { recipe_id: 19, ingredient_id: 85, amount: "20g" },
  
  // Recipe 20: Falafel Wrap
  { recipe_id: 20, ingredient_id: 63, amount: "400g" },
  { recipe_id: 20, ingredient_id: 64, amount: "50ml" },
  { recipe_id: 20, ingredient_id: 65, amount: "1 tsp" },
  { recipe_id: 20, ingredient_id: 66, amount: "4 pcs" },
  
  // Recipe 21: Beef Stir Fry
  { recipe_id: 21, ingredient_id: 49, amount: "400g" },
  { recipe_id: 21, ingredient_id: 67, amount: "2 pcs" },
  { recipe_id: 21, ingredient_id: 68, amount: "50ml" },
  { recipe_id: 21, ingredient_id: 23, amount: "3 cloves" },
  
  // Recipe 22: Croissant
  { recipe_id: 22, ingredient_id: 1, amount: "500g" },
  { recipe_id: 22, ingredient_id: 11, amount: "250g" },
  { recipe_id: 22, ingredient_id: 7, amount: "150ml" },
  
  // Recipe 23: Shrimp Scampi
  { recipe_id: 23, ingredient_id: 69, amount: "400g" },
  { recipe_id: 23, ingredient_id: 23, amount: "6 cloves" },
  { recipe_id: 23, ingredient_id: 38, amount: "100ml" },
  { recipe_id: 23, ingredient_id: 43, amount: "1 pc" },
  
  // Recipe 24: Vegetable Curry
  { recipe_id: 24, ingredient_id: 8, amount: "400ml" },
  { recipe_id: 24, ingredient_id: 9, amount: "2 tbsp" },
  { recipe_id: 24, ingredient_id: 67, amount: "2 pcs" },
  { recipe_id: 24, ingredient_id: 96, amount: "2 pcs" },
  
  // Recipe 25: Cheesecake
  { recipe_id: 25, ingredient_id: 70, amount: "500g" },
  { recipe_id: 25, ingredient_id: 71, amount: "200g" },
  { recipe_id: 25, ingredient_id: 12, amount: "150g" },
  { recipe_id: 25, ingredient_id: 74, amount: "3 pcs" },
  
  // Recipe 26: Ramen Bowl
  { recipe_id: 26, ingredient_id: 72, amount: "200g" },
  { recipe_id: 26, ingredient_id: 73, amount: "300g" },
  { recipe_id: 26, ingredient_id: 74, amount: "2 pcs" },
  { recipe_id: 26, ingredient_id: 68, amount: "30ml" },
  
  // Recipe 27: Caprese Salad
  { recipe_id: 27, ingredient_id: 2, amount: "4 pcs" },
  { recipe_id: 27, ingredient_id: 3, amount: "200g" },
  { recipe_id: 27, ingredient_id: 4, amount: "10 leaves" },
  
  // Recipe 28: Pulled Pork Sandwich
  { recipe_id: 28, ingredient_id: 75, amount: "1500g" },
  { recipe_id: 28, ingredient_id: 76, amount: "200ml" },
  { recipe_id: 28, ingredient_id: 59, amount: "6 pcs" },
  { recipe_id: 28, ingredient_id: 77, amount: "200g" },
  
  // Recipe 29: Hummus
  { recipe_id: 29, ingredient_id: 63, amount: "400g" },
  { recipe_id: 29, ingredient_id: 64, amount: "100ml" },
  { recipe_id: 29, ingredient_id: 43, amount: "1 pc" },
  { recipe_id: 29, ingredient_id: 23, amount: "2 cloves" },
  
  // Recipe 30: Lasagna
  { recipe_id: 30, ingredient_id: 78, amount: "12 pcs" },
  { recipe_id: 30, ingredient_id: 58, amount: "500g" },
  { recipe_id: 30, ingredient_id: 79, amount: "250g" },
  { recipe_id: 30, ingredient_id: 3, amount: "200g" },
  
  // Recipe 31: Banana Bread
  { recipe_id: 31, ingredient_id: 51, amount: "3 pcs" },
  { recipe_id: 31, ingredient_id: 1, amount: "250g" },
  { recipe_id: 31, ingredient_id: 12, amount: "150g" },
  { recipe_id: 31, ingredient_id: 80, amount: "2 tsp" },
  
  // Recipe 32: Pho
  { recipe_id: 32, ingredient_id: 41, amount: "200g" },
  { recipe_id: 32, ingredient_id: 82, amount: "1000g" },
  { recipe_id: 32, ingredient_id: 83, amount: "2 pcs" },
  { recipe_id: 32, ingredient_id: 49, amount: "300g" },
  
  // Recipe 33: Chicken Alfredo
  { recipe_id: 33, ingredient_id: 84, amount: "400g" },
  { recipe_id: 33, ingredient_id: 17, amount: "400g" },
  { recipe_id: 33, ingredient_id: 20, amount: "300ml" },
  { recipe_id: 33, ingredient_id: 14, amount: "100g" },
  
  // Recipe 34: Brownies
  { recipe_id: 34, ingredient_id: 10, amount: "200g" },
  { recipe_id: 34, ingredient_id: 11, amount: "150g" },
  { recipe_id: 34, ingredient_id: 12, amount: "200g" },
  { recipe_id: 34, ingredient_id: 74, amount: "3 pcs" },
  
  // Recipe 35: Paella
  { recipe_id: 35, ingredient_id: 36, amount: "400g" },
  { recipe_id: 35, ingredient_id: 86, amount: "1g" },
  { recipe_id: 35, ingredient_id: 87, amount: "400g" },
  { recipe_id: 35, ingredient_id: 17, amount: "300g" },
  
  // Recipe 36: Eggs Benedict
  { recipe_id: 36, ingredient_id: 74, amount: "4 pcs" },
  { recipe_id: 36, ingredient_id: 88, amount: "8 slices" },
  { recipe_id: 36, ingredient_id: 89, amount: "4 pcs" },
  { recipe_id: 36, ingredient_id: 104, amount: "3 pcs" },
  
  // Recipe 37: Quinoa Bowl
  { recipe_id: 37, ingredient_id: 90, amount: "200g" },
  { recipe_id: 37, ingredient_id: 67, amount: "2 pcs" },
  { recipe_id: 37, ingredient_id: 64, amount: "50ml" },
  { recipe_id: 37, ingredient_id: 25, amount: "1 ripe" },
  
  // Recipe 38: Meatballs
  { recipe_id: 38, ingredient_id: 58, amount: "500g" },
  { recipe_id: 38, ingredient_id: 91, amount: "300g" },
  { recipe_id: 38, ingredient_id: 92, amount: "400ml" },
  { recipe_id: 38, ingredient_id: 100, amount: "50g" },
  
  // Recipe 39: Waffles
  { recipe_id: 39, ingredient_id: 93, amount: "300g" },
  { recipe_id: 39, ingredient_id: 7, amount: "250ml" },
  { recipe_id: 39, ingredient_id: 74, amount: "2 pcs" },
  
  // Recipe 40: Fish Tacos
  { recipe_id: 40, ingredient_id: 94, amount: "400g" },
  { recipe_id: 40, ingredient_id: 30, amount: "8 pcs" },
  { recipe_id: 40, ingredient_id: 95, amount: "200g" },
  { recipe_id: 40, ingredient_id: 43, amount: "2 pcs" },
  
  // Recipe 41: Beef Bourguignon
  { recipe_id: 41, ingredient_id: 49, amount: "1000g" },
  { recipe_id: 41, ingredient_id: 97, amount: "500ml" },
  { recipe_id: 41, ingredient_id: 96, amount: "3 pcs" },
  { recipe_id: 41, ingredient_id: 24, amount: "2 large" },
  
  // Recipe 42: Chia Pudding
  { recipe_id: 42, ingredient_id: 98, amount: "50g" },
  { recipe_id: 42, ingredient_id: 99, amount: "300ml" },
  { recipe_id: 42, ingredient_id: 52, amount: "100g" },
  
  // Recipe 43: Chicken Parmesan
  { recipe_id: 43, ingredient_id: 17, amount: "500g" },
  { recipe_id: 43, ingredient_id: 92, amount: "300ml" },
  { recipe_id: 43, ingredient_id: 3, amount: "150g" },
  { recipe_id: 43, ingredient_id: 100, amount: "100g" },
  
  // Recipe 44: Guacamole
  { recipe_id: 44, ingredient_id: 25, amount: "3 ripe" },
  { recipe_id: 44, ingredient_id: 43, amount: "2 pcs" },
  { recipe_id: 44, ingredient_id: 101, amount: "20g" },
  { recipe_id: 44, ingredient_id: 24, amount: "1 small" },
  
  // Recipe 45: Beef Chili
  { recipe_id: 45, ingredient_id: 58, amount: "600g" },
  { recipe_id: 45, ingredient_id: 102, amount: "400g" },
  { recipe_id: 45, ingredient_id: 103, amount: "2 tbsp" },
  { recipe_id: 45, ingredient_id: 2, amount: "4 pcs" },
  
  // Recipe 46: Crème Brûlée
  { recipe_id: 46, ingredient_id: 20, amount: "500ml" },
  { recipe_id: 46, ingredient_id: 104, amount: "6 pcs" },
  { recipe_id: 46, ingredient_id: 12, amount: "100g" },
  { recipe_id: 46, ingredient_id: 81, amount: "1 tsp" },
  
  // Recipe 47: Bibimbap
  { recipe_id: 47, ingredient_id: 36, amount: "300g" },
  { recipe_id: 47, ingredient_id: 105, amount: "2 tbsp" },
  { recipe_id: 47, ingredient_id: 106, amount: "100g" },
  { recipe_id: 47, ingredient_id: 74, amount: "2 pcs" },
  
  // Recipe 48: Grilled Salmon
  { recipe_id: 48, ingredient_id: 55, amount: "500g" },
  { recipe_id: 48, ingredient_id: 43, amount: "1 pc" },
  { recipe_id: 48, ingredient_id: 107, amount: "10g" },
  
  // Recipe 49: Chocolate Chip Cookies
  { recipe_id: 49, ingredient_id: 1, amount: "250g" },
  { recipe_id: 49, ingredient_id: 108, amount: "200g" },
  { recipe_id: 49, ingredient_id: 109, amount: "150g" },
  { recipe_id: 49, ingredient_id: 11, amount: "100g" },
  
  // Recipe 50: Chicken Enchiladas
  { recipe_id: 50, ingredient_id: 17, amount: "500g" },
  { recipe_id: 50, ingredient_id: 110, amount: "8 pcs" },
  { recipe_id: 50, ingredient_id: 111, amount: "400ml" },
  { recipe_id: 50, ingredient_id: 33, amount: "200g" },
];

export const steps: Step[] = [
  // Recipe 1: Classic Margherita Pizza
  { step_id: 1, recipe_id: 1, step_number: 1, instruction: "Mix flour with water and yeast to make the dough" },
  { step_id: 2, recipe_id: 1, step_number: 2, instruction: "Let the dough rise for 1 hour" },
  { step_id: 3, recipe_id: 1, step_number: 3, instruction: "Roll out the dough and add tomato sauce" },
  { step_id: 4, recipe_id: 1, step_number: 4, instruction: "Add mozzarella and fresh tomato slices" },
  { step_id: 5, recipe_id: 1, step_number: 5, instruction: "Bake at 250°C for 12-15 minutes" },
  { step_id: 6, recipe_id: 1, step_number: 6, instruction: "Top with fresh basil before serving" },
  
  // Recipe 2: Blueberry Pancakes
  { step_id: 7, recipe_id: 2, step_number: 1, instruction: "Mix flour, eggs, and milk to create batter" },
  { step_id: 8, recipe_id: 2, step_number: 2, instruction: "Fold in fresh blueberries" },
  { step_id: 9, recipe_id: 2, step_number: 3, instruction: "Cook pancakes on medium heat for 2-3 minutes per side" },
  { step_id: 10, recipe_id: 2, step_number: 4, instruction: "Serve with maple syrup and butter" },
  
  // Recipe 3: Thai Green Curry
  { step_id: 11, recipe_id: 3, step_number: 1, instruction: "Heat oil and fry curry paste until fragrant" },
  { step_id: 12, recipe_id: 3, step_number: 2, instruction: "Add vegetables and stir fry for 5 minutes" },
  { step_id: 13, recipe_id: 3, step_number: 3, instruction: "Pour in coconut milk and simmer for 15 minutes" },
  { step_id: 14, recipe_id: 3, step_number: 4, instruction: "Serve with jasmine rice" },
  
  // Recipe 4: Chocolate Lava Cake
  { step_id: 15, recipe_id: 4, step_number: 1, instruction: "Melt chocolate and butter together" },
  { step_id: 16, recipe_id: 4, step_number: 2, instruction: "Whisk eggs and sugar until fluffy" },
  { step_id: 17, recipe_id: 4, step_number: 3, instruction: "Combine chocolate mixture with egg mixture" },
  { step_id: 18, recipe_id: 4, step_number: 4, instruction: "Pour into ramekins and bake at 200°C for 12 minutes" },
  { step_id: 19, recipe_id: 4, step_number: 5, instruction: "Let cool for 1 minute, then invert onto plates" },
  
  // Recipe 5: Caesar Salad
  { step_id: 20, recipe_id: 5, step_number: 1, instruction: "Wash and chop romaine lettuce into bite-sized pieces" },
  { step_id: 21, recipe_id: 5, step_number: 2, instruction: "Toss lettuce with Caesar dressing until evenly coated" },
  { step_id: 22, recipe_id: 5, step_number: 3, instruction: "Add croutons and grated parmesan cheese" },
  { step_id: 23, recipe_id: 5, step_number: 4, instruction: "Serve immediately while croutons are still crispy" },
  
  // Recipe 6: Chicken Tikka Masala
  { step_id: 24, recipe_id: 6, step_number: 1, instruction: "Marinate chicken in yogurt, garam masala, and spices for 30 minutes" },
  { step_id: 25, recipe_id: 6, step_number: 2, instruction: "Grill or pan-fry marinated chicken until cooked through" },
  { step_id: 26, recipe_id: 6, step_number: 3, instruction: "In a pan, sauté onions, ginger, and garlic until golden" },
  { step_id: 27, recipe_id: 6, step_number: 4, instruction: "Add tomato paste and cook for 2 minutes" },
  { step_id: 28, recipe_id: 6, step_number: 5, instruction: "Add diced tomatoes and simmer for 10 minutes" },
  { step_id: 29, recipe_id: 6, step_number: 6, instruction: "Stir in heavy cream and cooked chicken" },
  { step_id: 30, recipe_id: 6, step_number: 7, instruction: "Simmer for 5 minutes and serve with rice or naan" },
  
  // Recipe 7: Avocado Toast
  { step_id: 31, recipe_id: 7, step_number: 1, instruction: "Toast sourdough bread slices until golden and crispy" },
  { step_id: 32, recipe_id: 7, step_number: 2, instruction: "Mash ripe avocados with lemon juice and salt" },
  { step_id: 33, recipe_id: 7, step_number: 3, instruction: "Spread avocado mixture generously on toast" },
  { step_id: 34, recipe_id: 7, step_number: 4, instruction: "Sprinkle with red pepper flakes and serve immediately" },
  
  // Recipe 8: Beef Tacos
  { step_id: 35, recipe_id: 8, step_number: 1, instruction: "Brown ground beef in a large skillet over medium-high heat" },
  { step_id: 36, recipe_id: 8, step_number: 2, instruction: "Add taco seasoning and a splash of water, simmer for 5 minutes" },
  { step_id: 37, recipe_id: 8, step_number: 3, instruction: "Warm taco shells according to package directions" },
  { step_id: 38, recipe_id: 8, step_number: 4, instruction: "Fill shells with seasoned beef" },
  { step_id: 39, recipe_id: 8, step_number: 5, instruction: "Top with lettuce, tomatoes, cheese, sour cream, and salsa" },
  { step_id: 40, recipe_id: 8, step_number: 6, instruction: "Serve immediately while warm" },
  
  // Recipe 9: Mushroom Risotto
  { step_id: 41, recipe_id: 9, step_number: 1, instruction: "Sauté mushrooms in butter until golden" },
  { step_id: 42, recipe_id: 9, step_number: 2, instruction: "Toast arborio rice in the pan" },
  { step_id: 43, recipe_id: 9, step_number: 3, instruction: "Add white wine and stir until absorbed" },
  { step_id: 44, recipe_id: 9, step_number: 4, instruction: "Gradually add warm broth, stirring constantly" },
  { step_id: 45, recipe_id: 9, step_number: 5, instruction: "Finish with parmesan and butter" },
  
  // Recipe 10: French Toast
  { step_id: 46, recipe_id: 10, step_number: 1, instruction: "Whisk eggs, milk, and cinnamon together" },
  { step_id: 47, recipe_id: 10, step_number: 2, instruction: "Dip bread slices in egg mixture" },
  { step_id: 48, recipe_id: 10, step_number: 3, instruction: "Cook on griddle until golden on both sides" },
  { step_id: 49, recipe_id: 10, step_number: 4, instruction: "Serve with maple syrup and fresh berries" },
  
  // Recipe 11: Pad Thai
  { step_id: 50, recipe_id: 11, step_number: 1, instruction: "Soak rice noodles in warm water for 20 minutes" },
  { step_id: 51, recipe_id: 11, step_number: 2, instruction: "Stir-fry shrimp in hot wok" },
  { step_id: 52, recipe_id: 11, step_number: 3, instruction: "Add noodles and sauce, toss well" },
  { step_id: 53, recipe_id: 11, step_number: 4, instruction: "Garnish with peanuts and lime wedges" },
  
  // Recipe 12: Apple Pie
  { step_id: 54, recipe_id: 12, step_number: 1, instruction: "Peel and slice apples, toss with sugar and cinnamon" },
  { step_id: 55, recipe_id: 12, step_number: 2, instruction: "Place bottom crust in pie dish" },
  { step_id: 56, recipe_id: 12, step_number: 3, instruction: "Fill with apple mixture and cover with top crust" },
  { step_id: 57, recipe_id: 12, step_number: 4, instruction: "Bake at 190°C for 45-50 minutes until golden" },
  
  // Recipe 13: Greek Salad
  { step_id: 58, recipe_id: 13, step_number: 1, instruction: "Chop tomatoes, cucumber, and onion" },
  { step_id: 59, recipe_id: 13, step_number: 2, instruction: "Combine vegetables in a large bowl" },
  { step_id: 60, recipe_id: 13, step_number: 3, instruction: "Add feta cheese and olives" },
  { step_id: 61, recipe_id: 13, step_number: 4, instruction: "Dress with olive oil and lemon juice" },
  
  // Recipe 14: Beef Wellington
  { step_id: 62, recipe_id: 14, step_number: 1, instruction: "Sear beef filet on all sides until browned" },
  { step_id: 63, recipe_id: 14, step_number: 2, instruction: "Prepare mushroom duxelles by finely chopping and sautéing" },
  { step_id: 64, recipe_id: 14, step_number: 3, instruction: "Wrap beef with mushroom mixture in puff pastry" },
  { step_id: 65, recipe_id: 14, step_number: 4, instruction: "Brush with egg wash and bake at 200°C for 25-30 minutes" },
  
  // Recipe 15: Smoothie Bowl
  { step_id: 66, recipe_id: 15, step_number: 1, instruction: "Blend frozen bananas and berries with almond milk" },
  { step_id: 67, recipe_id: 15, step_number: 2, instruction: "Pour into bowl" },
  { step_id: 68, recipe_id: 15, step_number: 3, instruction: "Top with fresh fruit, granola, and seeds" },
  
  // Recipe 16: Sushi Rolls
  { step_id: 69, recipe_id: 16, step_number: 1, instruction: "Cook sushi rice and season with rice vinegar" },
  { step_id: 70, recipe_id: 16, step_number: 2, instruction: "Place nori on bamboo mat" },
  { step_id: 71, recipe_id: 16, step_number: 3, instruction: "Spread rice on nori, add fillings" },
  { step_id: 72, recipe_id: 16, step_number: 4, instruction: "Roll tightly and slice into pieces" },
  
  // Recipe 17: Minestrone Soup
  { step_id: 73, recipe_id: 17, step_number: 1, instruction: "Sauté onions, carrots, and celery" },
  { step_id: 74, recipe_id: 17, step_number: 2, instruction: "Add tomatoes and vegetable broth" },
  { step_id: 75, recipe_id: 17, step_number: 3, instruction: "Add beans and pasta, simmer until tender" },
  { step_id: 76, recipe_id: 17, step_number: 4, instruction: "Season with herbs and serve with parmesan" },
  
  // Recipe 18: Beef Burger
  { step_id: 77, recipe_id: 18, step_number: 1, instruction: "Form ground beef into patties, season with salt and pepper" },
  { step_id: 78, recipe_id: 18, step_number: 2, instruction: "Grill or pan-fry burgers for 4-5 minutes per side" },
  { step_id: 79, recipe_id: 18, step_number: 3, instruction: "Toast buns on the grill" },
  { step_id: 80, recipe_id: 18, step_number: 4, instruction: "Assemble burgers with lettuce, tomato, and sauce" },
  
  // Recipe 19: Tiramisu
  { step_id: 81, recipe_id: 19, step_number: 1, instruction: "Whip mascarpone with sugar until smooth" },
  { step_id: 82, recipe_id: 19, step_number: 2, instruction: "Dip ladyfingers in coffee" },
  { step_id: 83, recipe_id: 19, step_number: 3, instruction: "Layer ladyfingers and mascarpone mixture" },
  { step_id: 84, recipe_id: 19, step_number: 4, instruction: "Dust with cocoa powder and refrigerate for 4 hours" },
  
  // Recipe 20: Falafel Wrap
  { step_id: 85, recipe_id: 20, step_number: 1, instruction: "Blend chickpeas with garlic, cumin, and herbs" },
  { step_id: 86, recipe_id: 20, step_number: 2, instruction: "Form mixture into small balls" },
  { step_id: 87, recipe_id: 20, step_number: 3, instruction: "Fry falafel until golden and crispy" },
  { step_id: 88, recipe_id: 20, step_number: 4, instruction: "Serve in pita with tahini sauce and vegetables" },
  
  // Recipe 21: Beef Stir Fry
  { step_id: 89, recipe_id: 21, step_number: 1, instruction: "Slice beef thinly against the grain" },
  { step_id: 90, recipe_id: 21, step_number: 2, instruction: "Heat wok until very hot, add oil" },
  { step_id: 91, recipe_id: 21, step_number: 3, instruction: "Stir-fry beef for 2 minutes, remove" },
  { step_id: 92, recipe_id: 21, step_number: 4, instruction: "Stir-fry vegetables, add beef back, toss with sauce" },
  
  // Recipe 22: Croissant
  { step_id: 93, recipe_id: 22, step_number: 1, instruction: "Make dough and let it rest in refrigerator" },
  { step_id: 94, recipe_id: 22, step_number: 2, instruction: "Laminate dough with butter through multiple folds" },
  { step_id: 95, recipe_id: 22, step_number: 3, instruction: "Roll out and cut into triangles" },
  { step_id: 96, recipe_id: 22, step_number: 4, instruction: "Roll up and bake at 200°C for 15-18 minutes" },
  
  // Recipe 23: Shrimp Scampi
  { step_id: 97, recipe_id: 23, step_number: 1, instruction: "Sauté minced garlic in butter" },
  { step_id: 98, recipe_id: 23, step_number: 2, instruction: "Add shrimp and cook until pink" },
  { step_id: 99, recipe_id: 23, step_number: 3, instruction: "Add white wine and lemon juice" },
  { step_id: 100, recipe_id: 23, step_number: 4, instruction: "Serve over pasta with fresh parsley" },
  
  // Recipe 24: Vegetable Curry
  { step_id: 101, recipe_id: 24, step_number: 1, instruction: "Sauté curry paste in oil until fragrant" },
  { step_id: 102, recipe_id: 24, step_number: 2, instruction: "Add chopped vegetables" },
  { step_id: 103, recipe_id: 24, step_number: 3, instruction: "Pour in coconut milk and simmer" },
  { step_id: 104, recipe_id: 24, step_number: 4, instruction: "Serve with rice or naan bread" },
  
  // Recipe 25: Cheesecake
  { step_id: 105, recipe_id: 25, step_number: 1, instruction: "Make crust from graham crackers and butter, press into pan" },
  { step_id: 106, recipe_id: 25, step_number: 2, instruction: "Beat cream cheese until smooth" },
  { step_id: 107, recipe_id: 25, step_number: 3, instruction: "Add eggs one at a time, then sugar" },
  { step_id: 108, recipe_id: 25, step_number: 4, instruction: "Bake at 160°C for 50 minutes in water bath" },
  { step_id: 109, recipe_id: 25, step_number: 5, instruction: "Chill for at least 4 hours before serving" },
  
  // Recipe 26: Ramen Bowl
  { step_id: 110, recipe_id: 26, step_number: 1, instruction: "Make rich broth by simmering pork bones for hours" },
  { step_id: 111, recipe_id: 26, step_number: 2, instruction: "Cook ramen noodles according to package" },
  { step_id: 112, recipe_id: 26, step_number: 3, instruction: "Slice pork belly and soft-boil eggs" },
  { step_id: 113, recipe_id: 26, step_number: 4, instruction: "Assemble bowl with noodles, broth, pork, egg, and toppings" },
  
  // Recipe 27: Caprese Salad
  { step_id: 114, recipe_id: 27, step_number: 1, instruction: "Slice tomatoes and mozzarella into rounds" },
  { step_id: 115, recipe_id: 27, step_number: 2, instruction: "Arrange alternating slices on a platter" },
  { step_id: 116, recipe_id: 27, step_number: 3, instruction: "Add fresh basil leaves" },
  { step_id: 117, recipe_id: 27, step_number: 4, instruction: "Drizzle with olive oil and balsamic glaze" },
  
  // Recipe 28: Pulled Pork Sandwich
  { step_id: 118, recipe_id: 28, step_number: 1, instruction: "Season pork shoulder with spice rub" },
  { step_id: 119, recipe_id: 28, step_number: 2, instruction: "Slow cook in oven at 120°C for 6-8 hours" },
  { step_id: 120, recipe_id: 28, step_number: 3, instruction: "Shred pork with forks" },
  { step_id: 121, recipe_id: 28, step_number: 4, instruction: "Mix with BBQ sauce and serve on buns with coleslaw" },
  
  // Recipe 29: Hummus
  { step_id: 122, recipe_id: 29, step_number: 1, instruction: "Blend chickpeas until smooth" },
  { step_id: 123, recipe_id: 29, step_number: 2, instruction: "Add tahini, lemon juice, and garlic" },
  { step_id: 124, recipe_id: 29, step_number: 3, instruction: "Blend until creamy, adding water as needed" },
  { step_id: 125, recipe_id: 29, step_number: 4, instruction: "Serve with olive oil drizzle and paprika" },
  
  // Recipe 30: Lasagna
  { step_id: 126, recipe_id: 30, step_number: 1, instruction: "Brown ground beef and mix with marinara sauce" },
  { step_id: 127, recipe_id: 30, step_number: 2, instruction: "Mix ricotta with egg and herbs" },
  { step_id: 128, recipe_id: 30, step_number: 3, instruction: "Layer pasta sheets with meat sauce, ricotta, and mozzarella" },
  { step_id: 129, recipe_id: 30, step_number: 4, instruction: "Bake at 180°C for 45 minutes" },
  
  // Recipe 31: Banana Bread
  { step_id: 130, recipe_id: 31, step_number: 1, instruction: "Mash ripe bananas in a bowl" },
  { step_id: 131, recipe_id: 31, step_number: 2, instruction: "Mix with sugar, eggs, and melted butter" },
  { step_id: 132, recipe_id: 31, step_number: 3, instruction: "Fold in flour and baking powder" },
  { step_id: 133, recipe_id: 31, step_number: 4, instruction: "Bake at 175°C for 50-60 minutes" },
  
  // Recipe 32: Pho
  { step_id: 134, recipe_id: 32, step_number: 1, instruction: "Make broth by simmering beef bones with star anise and spices" },
  { step_id: 135, recipe_id: 32, step_number: 2, instruction: "Strain broth after 8 hours" },
  { step_id: 136, recipe_id: 32, step_number: 3, instruction: "Cook rice noodles and slice beef thinly" },
  { step_id: 137, recipe_id: 32, step_number: 4, instruction: "Assemble with noodles, raw beef, hot broth, and fresh herbs" },
  
  // Recipe 33: Chicken Alfredo
  { step_id: 138, recipe_id: 33, step_number: 1, instruction: "Cook fettuccine until al dente" },
  { step_id: 139, recipe_id: 33, step_number: 2, instruction: "Grill or pan-fry chicken breast" },
  { step_id: 140, recipe_id: 33, step_number: 3, instruction: "Make Alfredo sauce with cream and parmesan" },
  { step_id: 141, recipe_id: 33, step_number: 4, instruction: "Toss pasta with sauce and top with sliced chicken" },
  
  // Recipe 34: Brownies
  { step_id: 142, recipe_id: 34, step_number: 1, instruction: "Melt chocolate and butter together" },
  { step_id: 143, recipe_id: 34, step_number: 2, instruction: "Whisk in sugar and eggs" },
  { step_id: 144, recipe_id: 34, step_number: 3, instruction: "Fold in flour until just combined" },
  { step_id: 145, recipe_id: 34, step_number: 4, instruction: "Bake at 180°C for 25-30 minutes" },
  
  // Recipe 35: Paella
  { step_id: 146, recipe_id: 35, step_number: 1, instruction: "Sauté chicken pieces in large paella pan" },
  { step_id: 147, recipe_id: 35, step_number: 2, instruction: "Add rice and toast briefly" },
  { step_id: 148, recipe_id: 35, step_number: 3, instruction: "Add saffron-infused broth and seafood" },
  { step_id: 149, recipe_id: 35, step_number: 4, instruction: "Cook without stirring until rice is tender" },
  
  // Recipe 36: Eggs Benedict
  { step_id: 150, recipe_id: 36, step_number: 1, instruction: "Make hollandaise sauce by whisking egg yolks with lemon" },
  { step_id: 151, recipe_id: 36, step_number: 2, instruction: "Slowly add melted butter while whisking" },
  { step_id: 152, recipe_id: 36, step_number: 3, instruction: "Poach eggs in simmering water" },
  { step_id: 153, recipe_id: 36, step_number: 4, instruction: "Assemble on toasted muffin with bacon and hollandaise" },
  
  // Recipe 37: Quinoa Bowl
  { step_id: 154, recipe_id: 37, step_number: 1, instruction: "Cook quinoa in vegetable broth" },
  { step_id: 155, recipe_id: 37, step_number: 2, instruction: "Roast vegetables with olive oil" },
  { step_id: 156, recipe_id: 37, step_number: 3, instruction: "Arrange quinoa and vegetables in bowl" },
  { step_id: 157, recipe_id: 37, step_number: 4, instruction: "Top with tahini dressing and avocado" },
  
  // Recipe 38: Meatballs
  { step_id: 158, recipe_id: 38, step_number: 1, instruction: "Mix ground meats with breadcrumbs, egg, and herbs" },
  { step_id: 159, recipe_id: 38, step_number: 2, instruction: "Form into balls" },
  { step_id: 160, recipe_id: 38, step_number: 3, instruction: "Brown meatballs in pan" },
  { step_id: 161, recipe_id: 38, step_number: 4, instruction: "Simmer in marinara sauce for 20 minutes" },
  
  // Recipe 39: Waffles
  { step_id: 162, recipe_id: 39, step_number: 1, instruction: "Mix waffle batter according to package" },
  { step_id: 163, recipe_id: 39, step_number: 2, instruction: "Preheat waffle iron" },
  { step_id: 164, recipe_id: 39, step_number: 3, instruction: "Pour batter and cook until golden" },
  { step_id: 165, recipe_id: 39, step_number: 4, instruction: "Serve with butter and syrup" },
  
  // Recipe 40: Fish Tacos
  { step_id: 166, recipe_id: 40, step_number: 1, instruction: "Season fish with spices" },
  { step_id: 167, recipe_id: 40, step_number: 2, instruction: "Pan-fry or grill until crispy" },
  { step_id: 168, recipe_id: 40, step_number: 3, instruction: "Make cabbage slaw with lime dressing" },
  { step_id: 169, recipe_id: 40, step_number: 4, instruction: "Assemble tacos with fish, slaw, and crema" },
  
  // Recipe 41: Beef Bourguignon
  { step_id: 170, recipe_id: 41, step_number: 1, instruction: "Brown beef cubes in batches" },
  { step_id: 171, recipe_id: 41, step_number: 2, instruction: "Sauté onions, carrots, and mushrooms" },
  { step_id: 172, recipe_id: 41, step_number: 3, instruction: "Add red wine and beef stock" },
  { step_id: 173, recipe_id: 41, step_number: 4, instruction: "Braise in oven at 150°C for 2.5 hours" },
  
  // Recipe 42: Chia Pudding
  { step_id: 174, recipe_id: 42, step_number: 1, instruction: "Mix chia seeds with almond milk" },
  { step_id: 175, recipe_id: 42, step_number: 2, instruction: "Stir well and refrigerate overnight" },
  { step_id: 176, recipe_id: 42, step_number: 3, instruction: "Stir again in the morning" },
  { step_id: 177, recipe_id: 42, step_number: 4, instruction: "Top with fresh berries and honey" },
  
  // Recipe 43: Chicken Parmesan
  { step_id: 178, recipe_id: 43, step_number: 1, instruction: "Pound chicken breasts thin" },
  { step_id: 179, recipe_id: 43, step_number: 2, instruction: "Bread with flour, egg, and breadcrumbs" },
  { step_id: 180, recipe_id: 43, step_number: 3, instruction: "Fry until golden, then bake" },
  { step_id: 181, recipe_id: 43, step_number: 4, instruction: "Top with marinara and mozzarella, broil until melted" },
  
  // Recipe 44: Guacamole
  { step_id: 182, recipe_id: 44, step_number: 1, instruction: "Mash avocados in a bowl" },
  { step_id: 183, recipe_id: 44, step_number: 2, instruction: "Add diced onion, cilantro, and lime juice" },
  { step_id: 184, recipe_id: 44, step_number: 3, instruction: "Season with salt and pepper" },
  { step_id: 185, recipe_id: 44, step_number: 4, instruction: "Serve immediately with chips" },
  
  // Recipe 45: Beef Chili
  { step_id: 186, recipe_id: 45, step_number: 1, instruction: "Brown ground beef in large pot" },
  { step_id: 187, recipe_id: 45, step_number: 2, instruction: "Add onions and garlic, sauté" },
  { step_id: 188, recipe_id: 45, step_number: 3, instruction: "Add tomatoes, beans, and chili powder" },
  { step_id: 189, recipe_id: 45, step_number: 4, instruction: "Simmer for 45 minutes, stirring occasionally" },
  
  // Recipe 46: Crème Brûlée
  { step_id: 190, recipe_id: 46, step_number: 1, instruction: "Whisk egg yolks with sugar" },
  { step_id: 191, recipe_id: 46, step_number: 2, instruction: "Heat cream and vanilla, then temper into eggs" },
  { step_id: 192, recipe_id: 46, step_number: 3, instruction: "Pour into ramekins and bake in water bath at 150°C" },
  { step_id: 193, recipe_id: 46, step_number: 4, instruction: "Chill, then torch sugar on top until caramelized" },
  
  // Recipe 47: Bibimbap
  { step_id: 194, recipe_id: 47, step_number: 1, instruction: "Cook rice and prepare various vegetables" },
  { step_id: 195, recipe_id: 47, step_number: 2, instruction: "Sauté each vegetable separately" },
  { step_id: 196, recipe_id: 47, step_number: 3, instruction: "Fry egg sunny-side up" },
  { step_id: 197, recipe_id: 47, step_number: 4, instruction: "Arrange rice, vegetables, egg in bowl with gochujang" },
  
  // Recipe 48: Grilled Salmon
  { step_id: 198, recipe_id: 48, step_number: 1, instruction: "Season salmon with salt, pepper, and herbs" },
  { step_id: 199, recipe_id: 48, step_number: 2, instruction: "Preheat grill to medium-high" },
  { step_id: 200, recipe_id: 48, step_number: 3, instruction: "Grill skin-side down for 6 minutes" },
  { step_id: 201, recipe_id: 48, step_number: 4, instruction: "Flip and grill 2 more minutes, serve with lemon" },
  
  // Recipe 49: Chocolate Chip Cookies
  { step_id: 202, recipe_id: 49, step_number: 1, instruction: "Cream butter and sugars together" },
  { step_id: 203, recipe_id: 49, step_number: 2, instruction: "Beat in eggs and vanilla" },
  { step_id: 204, recipe_id: 49, step_number: 3, instruction: "Mix in flour and chocolate chips" },
  { step_id: 205, recipe_id: 49, step_number: 4, instruction: "Bake at 180°C for 10-12 minutes" },
  
  // Recipe 50: Chicken Enchiladas
  { step_id: 206, recipe_id: 50, step_number: 1, instruction: "Cook and shred chicken" },
  { step_id: 207, recipe_id: 50, step_number: 2, instruction: "Mix chicken with some enchilada sauce and cheese" },
  { step_id: 208, recipe_id: 50, step_number: 3, instruction: "Fill tortillas and roll up" },
  { step_id: 209, recipe_id: 50, step_number: 4, instruction: "Top with remaining sauce and cheese, bake at 180°C for 25 minutes" },
];

export const recipeCategories: RecipeCategory[] = [
  { recipe_id: 1, category_id: 3 }, // Dinner
  { recipe_id: 2, category_id: 1 }, // Breakfast
  { recipe_id: 2, category_id: 8 }, // Quick & Easy
  { recipe_id: 3, category_id: 3 }, // Dinner
  { recipe_id: 3, category_id: 5 }, // Vegetarian
  { recipe_id: 4, category_id: 4 }, // Dessert
  { recipe_id: 5, category_id: 2 }, // Lunch
  { recipe_id: 5, category_id: 8 }, // Quick & Easy
  { recipe_id: 6, category_id: 3 }, // Dinner
  { recipe_id: 7, category_id: 1 }, // Breakfast
  { recipe_id: 7, category_id: 5 }, // Vegetarian
  { recipe_id: 7, category_id: 8 }, // Quick & Easy
  { recipe_id: 8, category_id: 3 }, // Dinner
  { recipe_id: 8, category_id: 8 }, // Quick & Easy
  { recipe_id: 9, category_id: 3 }, // Dinner
  { recipe_id: 9, category_id: 5 }, // Vegetarian
  { recipe_id: 10, category_id: 1 }, // Breakfast
  { recipe_id: 10, category_id: 8 }, // Quick & Easy
  { recipe_id: 11, category_id: 2 }, // Lunch
  { recipe_id: 11, category_id: 3 }, // Dinner
  { recipe_id: 12, category_id: 4 }, // Dessert
  { recipe_id: 13, category_id: 2 }, // Lunch
  { recipe_id: 13, category_id: 5 }, // Vegetarian
  { recipe_id: 13, category_id: 8 }, // Quick & Easy
  { recipe_id: 14, category_id: 3 }, // Dinner
  { recipe_id: 15, category_id: 1 }, // Breakfast
  { recipe_id: 15, category_id: 6 }, // Vegan
  { recipe_id: 15, category_id: 8 }, // Quick & Easy
  { recipe_id: 16, category_id: 2 }, // Lunch
  { recipe_id: 16, category_id: 3 }, // Dinner
  { recipe_id: 17, category_id: 2 }, // Lunch
  { recipe_id: 17, category_id: 5 }, // Vegetarian
  { recipe_id: 18, category_id: 2 }, // Lunch
  { recipe_id: 18, category_id: 8 }, // Quick & Easy
  { recipe_id: 19, category_id: 4 }, // Dessert
  { recipe_id: 20, category_id: 2 }, // Lunch
  { recipe_id: 20, category_id: 5 }, // Vegetarian
  { recipe_id: 21, category_id: 3 }, // Dinner
  { recipe_id: 21, category_id: 8 }, // Quick & Easy
  { recipe_id: 22, category_id: 1 }, // Breakfast
  { recipe_id: 23, category_id: 3 }, // Dinner
  { recipe_id: 23, category_id: 8 }, // Quick & Easy
  { recipe_id: 24, category_id: 3 }, // Dinner
  { recipe_id: 24, category_id: 5 }, // Vegetarian
  { recipe_id: 24, category_id: 6 }, // Vegan
  { recipe_id: 25, category_id: 4 }, // Dessert
  { recipe_id: 26, category_id: 2 }, // Lunch
  { recipe_id: 26, category_id: 3 }, // Dinner
  { recipe_id: 27, category_id: 2 }, // Lunch
  { recipe_id: 27, category_id: 5 }, // Vegetarian
  { recipe_id: 27, category_id: 8 }, // Quick & Easy
  { recipe_id: 28, category_id: 2 }, // Lunch
  { recipe_id: 28, category_id: 3 }, // Dinner
  { recipe_id: 29, category_id: 2 }, // Lunch
  { recipe_id: 29, category_id: 5 }, // Vegetarian
  { recipe_id: 29, category_id: 6 }, // Vegan
  { recipe_id: 29, category_id: 8 }, // Quick & Easy
  { recipe_id: 30, category_id: 3 }, // Dinner
  { recipe_id: 31, category_id: 1 }, // Breakfast
  { recipe_id: 31, category_id: 4 }, // Dessert
  { recipe_id: 32, category_id: 2 }, // Lunch
  { recipe_id: 32, category_id: 3 }, // Dinner
  { recipe_id: 33, category_id: 3 }, // Dinner
  { recipe_id: 33, category_id: 8 }, // Quick & Easy
  { recipe_id: 34, category_id: 4 }, // Dessert
  { recipe_id: 34, category_id: 8 }, // Quick & Easy
  { recipe_id: 35, category_id: 3 }, // Dinner
  { recipe_id: 36, category_id: 1 }, // Breakfast
  { recipe_id: 37, category_id: 2 }, // Lunch
  { recipe_id: 37, category_id: 5 }, // Vegetarian
  { recipe_id: 37, category_id: 6 }, // Vegan
  { recipe_id: 38, category_id: 3 }, // Dinner
  { recipe_id: 39, category_id: 1 }, // Breakfast
  { recipe_id: 39, category_id: 8 }, // Quick & Easy
  { recipe_id: 40, category_id: 2 }, // Lunch
  { recipe_id: 40, category_id: 3 }, // Dinner
  { recipe_id: 40, category_id: 8 }, // Quick & Easy
  { recipe_id: 41, category_id: 3 }, // Dinner
  { recipe_id: 42, category_id: 1 }, // Breakfast
  { recipe_id: 42, category_id: 6 }, // Vegan
  { recipe_id: 42, category_id: 8 }, // Quick & Easy
  { recipe_id: 43, category_id: 3 }, // Dinner
  { recipe_id: 44, category_id: 2 }, // Lunch
  { recipe_id: 44, category_id: 5 }, // Vegetarian
  { recipe_id: 44, category_id: 6 }, // Vegan
  { recipe_id: 44, category_id: 8 }, // Quick & Easy
  { recipe_id: 45, category_id: 3 }, // Dinner
  { recipe_id: 46, category_id: 4 }, // Dessert
  { recipe_id: 47, category_id: 2 }, // Lunch
  { recipe_id: 47, category_id: 3 }, // Dinner
  { recipe_id: 48, category_id: 3 }, // Dinner
  { recipe_id: 48, category_id: 8 }, // Quick & Easy
  { recipe_id: 48, category_id: 7 }, // Gluten-Free
  { recipe_id: 49, category_id: 4 }, // Dessert
  { recipe_id: 49, category_id: 8 }, // Quick & Easy
  { recipe_id: 50, category_id: 3 }, // Dinner
];

export let reviews: Review[] = [
  {
    review_id: 1,
    recipe_id: 1,
    user_id: 2,
    rating: 5,
    comment: "Amazing pizza! The crust was perfect and the flavors were incredible. Will definitely make again!",
    created_at: "2024-10-15T14:30:00Z",
  },
  {
    review_id: 2,
    recipe_id: 1,
    user_id: 3,
    rating: 4,
    comment: "Really good recipe. I added some extra basil and it was delicious.",
    created_at: "2024-10-20T10:15:00Z",
  },
  {
    review_id: 3,
    recipe_id: 2,
    user_id: 2,
    rating: 5,
    comment: "Best pancakes I've ever made! So fluffy and delicious.",
    created_at: "2024-10-18T08:45:00Z",
  },
  {
    review_id: 4,
    recipe_id: 3,
    user_id: 1,
    rating: 5,
    comment: "Absolutely fantastic curry! The flavors are so authentic.",
    created_at: "2024-10-22T19:00:00Z",
  },
  {
    review_id: 5,
    recipe_id: 4,
    user_id: 1,
    rating: 4,
    comment: "Delicious but quite challenging. Make sure to time it perfectly!",
    created_at: "2024-10-25T20:30:00Z",
  },
  {
    review_id: 6,
    recipe_id: 6,
    user_id: 3,
    rating: 5,
    comment: "My family loved this! The sauce is creamy and perfectly spiced.",
    created_at: "2024-10-28T18:20:00Z",
  },
  {
    review_id: 7,
    recipe_id: 7,
    user_id: 2,
    rating: 5,
    comment: "Quick, healthy, and delicious. Perfect for busy mornings!",
    created_at: "2024-10-30T07:30:00Z",
  },
];

export let favorites: Favorite[] = [
  { user_id: 1, recipe_id: 3, created_at: "2024-10-15T10:00:00Z" },
  { user_id: 1, recipe_id: 4, created_at: "2024-10-16T11:30:00Z" },
  { user_id: 1, recipe_id: 7, created_at: "2024-10-20T09:15:00Z" },
  { user_id: 2, recipe_id: 1, created_at: "2024-10-17T14:20:00Z" },
  { user_id: 2, recipe_id: 2, created_at: "2024-10-19T08:45:00Z" },
  { user_id: 3, recipe_id: 1, created_at: "2024-10-21T16:30:00Z" },
  { user_id: 3, recipe_id: 6, created_at: "2024-10-23T12:00:00Z" },
];

// Helper functions
export function getRecipeCategories(recipeId: number): Category[] {
  const categoryIds = recipeCategories
    .filter(rc => rc.recipe_id === recipeId)
    .map(rc => rc.category_id);
  return categories.filter(c => categoryIds.includes(c.category_id));
}

export function getRecipeIngredients(recipeId: number): Array<{ name: string; amount: string }> {
  const recipeIngs = recipeIngredients.filter(ri => ri.recipe_id === recipeId);
  return recipeIngs.map(ri => {
    const ingredient = ingredients.find(i => i.ingredient_id === ri.ingredient_id);
    return {
      name: ingredient?.name || "",
      amount: ri.amount,
    };
  });
}

export function getRecipeSteps(recipeId: number): Step[] {
  return steps.filter(s => s.recipe_id === recipeId).sort((a, b) => a.step_number - b.step_number);
}

export function getUserById(userId: number): User | undefined {
  return users.find(u => u.user_id === userId);
}

export function getRecipesByCategory(categoryId: number): Recipe[] {
  const recipeIds = recipeCategories
    .filter(rc => rc.category_id === categoryId)
    .map(rc => rc.recipe_id);
  return recipes.filter(r => recipeIds.includes(r.recipe_id));
}

export function getUserRecipes(userId: number): Recipe[] {
  return recipes.filter(r => r.user_id === userId);
}

export function getRecipeReviews(recipeId: number): Review[] {
  return reviews.filter(r => r.recipe_id === recipeId).sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export function getAverageRating(recipeId: number): number {
  const recipeReviews = reviews.filter(r => r.recipe_id === recipeId);
  if (recipeReviews.length === 0) return 0;
  const sum = recipeReviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / recipeReviews.length) * 10) / 10;
}

export function getReviewCount(recipeId: number): number {
  return reviews.filter(r => r.recipe_id === recipeId).length;
}

export function isFavorite(userId: number, recipeId: number): boolean {
  return favorites.some(f => f.user_id === userId && f.recipe_id === recipeId);
}

export function toggleFavorite(userId: number, recipeId: number): void {
  const index = favorites.findIndex(f => f.user_id === userId && f.recipe_id === recipeId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({
      user_id: userId,
      recipe_id: recipeId,
      created_at: new Date().toISOString(),
    });
  }
}

export function getUserFavorites(userId: number): Recipe[] {
  const favoriteRecipeIds = favorites
    .filter(f => f.user_id === userId)
    .map(f => f.recipe_id);
  return recipes.filter(r => favoriteRecipeIds.includes(r.recipe_id));
}

export function addReview(recipeId: number, userId: number, rating: number, comment: string): void {
  const newReview: Review = {
    review_id: reviews.length + 1,
    recipe_id: recipeId,
    user_id: userId,
    rating,
    comment,
    created_at: new Date().toISOString(),
  };
  reviews.push(newReview);
}

export function addRecipe(
  title: string,
  description: string,
  cookingTime: number,
  difficulty: "Easy" | "Medium" | "Hard",
  userId: number,
  ingredientsList: Array<{ name: string; amount: string }>,
  stepsList: string[],
  categoryIds: number[]
): Recipe {
  // Generate new recipe ID
  const newRecipeId = recipes.length > 0 ? Math.max(...recipes.map(r => r.recipe_id)) + 1 : 1;
  
  // Create the recipe
  const newRecipe: Recipe = {
    recipe_id: newRecipeId,
    title,
    description,
    cooking_time: cookingTime,
    difficulty,
    user_id: userId,
    image: undefined, // No image for user-created recipes initially
  };
  
  recipes.push(newRecipe);
  
  // Add ingredients (simplified - just store in steps as text since we don't have full ingredient management)
  // In a real app, this would properly manage the ingredients and recipeIngredients tables
  
  // Add steps
  stepsList.forEach((instruction, index) => {
    const newStepId = steps.length > 0 ? Math.max(...steps.map(s => s.step_id)) + 1 : 1;
    steps.push({
      step_id: newStepId + index,
      recipe_id: newRecipeId,
      step_number: index + 1,
      instruction,
    });
  });
  
  // Add categories
  categoryIds.forEach((categoryId) => {
    recipeCategories.push({
      recipe_id: newRecipeId,
      category_id: categoryId,
    });
  });
  
  return newRecipe;
}

export function deleteRecipe(recipeId: number): void {
  // Remove the recipe
  const recipeIndex = recipes.findIndex(r => r.recipe_id === recipeId);
  if (recipeIndex > -1) {
    recipes.splice(recipeIndex, 1);
  }
  
  // Remove associated steps
  const stepIndexes = steps.map((s, i) => s.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  stepIndexes.forEach(i => steps.splice(i, 1));
  
  // Remove associated categories
  const categoryIndexes = recipeCategories.map((rc, i) => rc.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  categoryIndexes.forEach(i => recipeCategories.splice(i, 1));
  
  // Remove associated reviews
  const reviewIndexes = reviews.map((r, i) => r.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  reviewIndexes.forEach(i => reviews.splice(i, 1));
  
  // Remove from favorites
  const favoriteIndexes = favorites.map((f, i) => f.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  favoriteIndexes.forEach(i => favorites.splice(i, 1));
}

export function updateRecipe(
  recipeId: number,
  title: string,
  description: string,
  cookingTime: number,
  difficulty: "Easy" | "Medium" | "Hard",
  stepsList: string[],
  categoryIds: number[]
): Recipe | null {
  const recipe = recipes.find(r => r.recipe_id === recipeId);
  if (!recipe) return null;
  
  // Update recipe
  recipe.title = title;
  recipe.description = description;
  recipe.cooking_time = cookingTime;
  recipe.difficulty = difficulty;
  
  // Remove old steps
  const stepIndexes = steps.map((s, i) => s.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  stepIndexes.forEach(i => steps.splice(i, 1));
  
  // Add new steps
  stepsList.forEach((instruction, index) => {
    const newStepId = steps.length > 0 ? Math.max(...steps.map(s => s.step_id)) + 1 : 1;
    steps.push({
      step_id: newStepId + index,
      recipe_id: recipeId,
      step_number: index + 1,
      instruction,
    });
  });
  
  // Remove old categories
  const categoryIndexes = recipeCategories.map((rc, i) => rc.recipe_id === recipeId ? i : -1).filter(i => i > -1).reverse();
  categoryIndexes.forEach(i => recipeCategories.splice(i, 1));
  
  // Add new categories
  categoryIds.forEach((categoryId) => {
    recipeCategories.push({
      recipe_id: recipeId,
      category_id: categoryId,
    });
  });
  
  return recipe;
}

// User management for login/signup
let userIdCounter = users.length + 1;

export function findUserByEmail(email: string): User | undefined {
  return users.find(u => u.email === email);
}

export function createUser(name: string, email: string, password: string): User {
  const newUser: User = {
    user_id: userIdCounter++,
    name,
    email,
    password,
  };
  users.push(newUser);
  return newUser;
}
