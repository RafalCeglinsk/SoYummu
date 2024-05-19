import { PageTitle } from "../components/PageTitle/PageTitle.jsx";
import IngredientsShoppingList from "../components/IndegredientsShoppingList/IndegredientsShoppingList.jsx";
import Footer from "../components/Footer/Footer.jsx";

const ShoppingList = () => {
  return (
    <>
      <PageTitle>Shopping List</PageTitle>
      <IngredientsShoppingList />
      <Footer/>
    </>
  );
};

export default ShoppingList;
