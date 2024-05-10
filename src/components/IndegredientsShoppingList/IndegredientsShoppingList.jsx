import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledIngridientsHeader,
  StyledIngridientsItem,
  StyledIngrsHeadThumb,
  StyledIngridientsContainer,
  StyledImageCardThumb,
  StyledImage,
  StyledQuantity,
  StyledFlexRow,
  StyledFlexQuantity,
  StyledListContainerIngridient,
  EmptyStyled,
  PictrueContainerStyled,
  StyledCloseIcon,
} from "./IndegredientsShoppingListStyled.js";
import {
  deleteShopping,
  getShopping,
} from "../../redux/shoppingList/operations.js";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg";
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg";

const IngredientsShoppingList = () => {
  const { token } = useSelector((state) => state.auth);
  const shoppingItems = useSelector((state) => {
    return state.shopping.items;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopping(token));
  }, [token, dispatch]);

  const deleteButton = (id) => {
    dispatch(deleteShopping(id));
  };

  return (
    <StyledIngridientsContainer>
      {shoppingItems.isLoading ? null : (
        <>
          {shoppingItems.length > 0 && (
            <StyledIngridientsHeader>
              <h3>Product</h3>
              <StyledIngrsHeadThumb>
                <p>Number</p>
                <p>Remove</p>
              </StyledIngrsHeadThumb>
            </StyledIngridientsHeader>
          )}
          <StyledListContainerIngridient>
            {shoppingItems.length === 0 ? (
              <PictrueContainerStyled>
                <picture>
                  <source
                    srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                    media="(max-width: 767px)"
                    sizes="(min-width: 259px) 259px, 100vw"
                  />
                  <source
                    srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                    media="(min-width: 768px)"
                    sizes="(min-width: 498px) 498px, 100vw"
                  />
                  <img src={vegetableBasket} alt="No recipe" />
                </picture>
                <EmptyStyled>Shopping list is empty</EmptyStyled>
              </PictrueContainerStyled>
            ) : (
              <>
                {shoppingItems.map((item) => {
                  const id = item.ingredientId._id;
                  const ttl = item.ingredientId.ttl;
                  const thb = item.ingredientId.thb;
                  return (
                    <StyledIngridientsItem key={item}>
                      <StyledImageCardThumb>
                        <StyledImage src={thb} alt={item.desc} height="60" />
                        <p>{ttl}</p>
                      </StyledImageCardThumb>
                      <StyledFlexQuantity>
                        <StyledFlexRow>
                          {item.measure &&
                            item.measure.split("/r/n").map((el, index) => (
                              <StyledQuantity key={index}>
                                <p>{el}</p>
                                <StyledCloseIcon
                                  onClick={() => deleteButton(id)}
                                >
                                  Delete
                                </StyledCloseIcon>
                              </StyledQuantity>
                            ))}
                        </StyledFlexRow>
                      </StyledFlexQuantity>
                    </StyledIngridientsItem>
                  );
                })}
              </>
            )}
          </StyledListContainerIngridient>
        </>
      )}
    </StyledIngridientsContainer>
  );
};

export default IngredientsShoppingList;
