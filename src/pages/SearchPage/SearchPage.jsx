import React from "react";
import { SearchPageStyled, NoResults } from "./SearchPage.styled.jsx";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar.jsx";
import { useSelector } from "react-redux";
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList.jsx";
import { PageTitle } from "../../components/PageTitle/PageTitle.jsx";
import SearchImg from "../../images/NoImage/NoImageSmall.png";
const SearchPage = () => {
  const searchResults = useSelector((state) => {
    return state.search.searchResults;
  });
  return (
    <>
      <PageTitle>Search</PageTitle>
      <SearchPageStyled>
        <SearchBar showSearchContainer={true} />
        {searchResults.length > 0 && (
          <SearchedRecipesList recipes={searchResults} />
        )}
        {!searchResults.length && (
          <NoResults>
            <img src={SearchImg} alt="No searching results vegetable img"></img>
            <p>Try looking for something else.</p>
          </NoResults>
        )}
      </SearchPageStyled>
    </>
  );
};

export default SearchPage;
