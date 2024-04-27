import { useDispatch, useSelector } from "react-redux";
import { GalleryElement } from "../GalleryElement/GalleryElement";

import { CategoriesWrapper } from "./Categories.styled";
import { getCategories, getCategory } from "../../redux/categories/operations";
import { useEffect } from "react";
import {
  selectCategories,
  selectCategory,
} from "../../redux/categories/selectors";
import { HorizontalScrollList } from "./HorizontalScrollList/HorizontalScrollList";
import { useParams } from "react-router-dom";

export const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(getCategory());
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
