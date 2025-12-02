import { createContext, ReactNode, useState } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  function addFavorite(id: string) {
    setFavoriteIds((currentFavIds)=> [...currentFavIds,id]);
  }
  function removeFavorite(id: string) {
    setFavoriteIds((currentFavIds)=> currentFavIds.filter(mealId => mealId !== id));
  }
  const value: FavoritesContextType = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
