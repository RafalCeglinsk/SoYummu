import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipies from "./pages/MyRecipies";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import Search from "./pages/Search";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { HomePage } from "./pages/Home";
import Main from "./pages/Main";
import SearchPage from "./pages/SearchPage/SearchPage";

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
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<AddRecipes />} />
        <Route path="/my" element={<MyRecipies />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search?" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
