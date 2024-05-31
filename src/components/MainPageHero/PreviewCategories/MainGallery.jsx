import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GalleryUl, MainGalleryH2, ButtonWrapper } from "./MainGallery.styled";
import { PreviewCategories } from "./PreviewCategories";
import { ButtonSeeAll } from "../../Buttons/GalleryButtonSeeAll";
import { getViewMode } from "#hooks/useWidth";
import { getMainPageRecipes } from "#redux/recipes/main-page/operations";
import { selectMainPage } from "#redux/recipes/main-page/selectors";

export const MainGallery = () => {
  const [viewMode, setViewMode] = useState(getViewMode());
  const dispatch = useDispatch();
  const categories = useSelector(selectMainPage);
  useEffect(() => {
    dispatch(getMainPageRecipes());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setViewMode(getViewMode());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GalleryUl>
      {categories.map((categoryRecipes, _id) => (
        <div key={_id}>
          <MainGalleryH2>{categoryRecipes[0].category}</MainGalleryH2>
          <PreviewCategories
            categoryRecipes={categoryRecipes}
            viewMode={viewMode}
          />
          <ButtonWrapper>
            <Link to={`/categories/${categoryRecipes[0].category}`}>
              <ButtonSeeAll text="See All" />{" "}
            </Link>
          </ButtonWrapper>
        </div>
      ))}
    </GalleryUl>
  );
};
