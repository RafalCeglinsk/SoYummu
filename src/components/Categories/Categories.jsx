import { useDispatch, useSelector } from "react-redux";
import { GalleryElement } from "../GalleryElement/GalleryElement";

import { CategoriesWrapper } from "./Categories.styled";
import { getCategory } from "../../redux/categories/operations";
import { useEffect } from "react";
import { selectCategory } from "../../redux/categories/selectors";
import { HorizontalScrollList } from "./HorizontalScrollList/HorizontalScrollList";
import { useParams } from "react-router-dom";
import { PageTitle } from "../PageTitle/PageTitle";

export const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(getCategory(category));
  }, [dispatch, category]);
  return (
    <div>
      <CategoriesWrapper>
        <HorizontalScrollList />
        <GalleryElement category={categories} />
      </CategoriesWrapper>
    </div>
  );
};
