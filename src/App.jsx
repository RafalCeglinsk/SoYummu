import { Routes, Route, Navigate } from "react-router-dom";

import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";
import { Suspense, lazy } from "react";
import PageNotFound from "#components/PageNotFound/PageNotFound.jsx";

const ShareedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const MyRecipePage = lazy(() => import("./pages/MyRecipies"));
const Favorites = lazy(() => import("./pages/Favorites"));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/Home"));
const Main = lazy(() => import("./pages/Main"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const AddRecipePage = lazy(() => import("./pages/AddRecipePage"));
const RecipesPage = lazy(() => import("./pages/RecipePage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/main"
              element={<PrivateRoute redirectTo="/" component={<Main />} />}
            />
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
                <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
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
              element={
                <PrivateRoute redirectTo="/" component={<Favorites />} />
              }
            />
            <Route
              path="/shoppingList"
              element={
                <PrivateRoute redirectTo="/" component={<ShoppingList />} />
              }
            />
            <Route
              path="/search?"
              element={
                <PrivateRoute redirectTo="/" component={<SearchPage />} />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
