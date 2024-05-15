export const selectFavorites = (state) => state.favorite.items;
export const selectIsFavorite = (state, id) => {
  if (state.favorite.items.length === 0) return false;
  const index = state.favorite.items.findIndex((item) => {
    return item === id;
  });
  if (index >= 0) return true;
  else return false;
};
