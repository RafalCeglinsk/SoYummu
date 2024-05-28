export const setSearchValue = (value) => ({
  type: "SET_SEARCH_VALUE",
  payload: value,
});

export const setSearchType = (type) => ({
  type: "SET_SEARCH_TYPE",
  payload: type,
});

export const selectSearchResults = (state) => state.search.searchResults;
