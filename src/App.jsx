import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header/Header";
import CategoriesPage from "./pages/CategoriesPage";
import { MyRecipePage } from "./pages/MyRecipies";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { HomePage } from "./pages/Home";
import Main from "./pages/Main";
import SearchPage from "./pages/SearchPage/SearchPage";
import AddRecipeForm from "./components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { RecipesPage } from "./pages/RecipePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
          }
        />
        <Route path="/main" element={<Main />} />
        <Route
          path="/categories"
          element={<Navigate to="/categories/beef" replace />}
        />

        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipesPage />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/my" element={<MyRecipePage />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search?" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
