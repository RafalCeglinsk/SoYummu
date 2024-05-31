import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "#components/SearchPage/SearchBar/SearchBar";
import SearchImg from "#images/SearchForSomethingElse/kisspng-vegetable-fruit-basket-century-farms-international-fruits-and-vegetables-5abfb9c60122f5 1.png";
import { SearchPageStyled, NoResults } from "./SearchPage.styled";
import { SearchedRecipesList } from "#components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import { PageTitle } from "#components/PageTitle/PageTitle";
import { selectSearchResults } from "#redux/searchBar/selectors";

const SearchPage = () => {
  const searchResults = useSelector(selectSearchResults);
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
