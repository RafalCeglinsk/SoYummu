import { Routes, Route, Navigate } from "react-router-dom";

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
import { ShareedLayout } from "./pages/ShrayedLayout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
          }
        />
        <Route path="/" element={<ShareedLayout />}>
          <Route path="/main" element={<Main />} />
          <Route
            path="/categories"
            element={
              <PrivateRoute
                redirectTo="/"
                component={<Navigate to="/categories/beef" />}
              />
            }
          />
          <Route
            path="/categories/:category"
            element={
              <PrivateRoute redirectTo="/" component={<CategoriesPage />} />
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={
              <PrivateRoute redirectTo="/" component={<RecipesPage />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute redirectTo="/" component={<AddRecipeForm />} />
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute redirectTo="/" component={<MyRecipePage />} />
            }
          />
          <Route
            path="/favorite"
            element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
          />
          <Route
            path="/shoppingList"
            element={
              <PrivateRoute redirectTo="/" component={<ShoppingList />} />
            }
          />
          <Route
            path="/search?"
            element={<PrivateRoute redirectTo="/" component={<SearchPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
