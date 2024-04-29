import {
  ScrollContainer,
  ScrollItem,
  StyledUl,
} from "../HorizontalScrollList/HorizontalScrollList.styled";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../redux/categories/operations";
import { selectCategories } from "../../../redux/categories/selectors";

export const HorizontalScrollList = () => {
  const scrollRef = useRef();
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <ScrollContainer ref={scrollRef} onWheel={handleWheel}>
      <StyledUl>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            <ScrollItem>{category}</ScrollItem>
          </li>
        ))}
      </StyledUl>
    </ScrollContainer>
  );
};
