import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipies from "./pages/MyRecipies";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import Search from "./pages/Search";
import { AuthForm } from "./components/AuthForm/AuthForm";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
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
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<AddRecipes />} />
        <Route path="/my" element={<MyRecipies />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search?" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
