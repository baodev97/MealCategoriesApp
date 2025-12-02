import MealList from "@/components/MealList";
import { MEALS } from "@/data/dummy-data";
import { FavoritesContext } from "@/store/context/favorites-context";
import { useContext } from "react";

function FavoritesScreen(){
    const favoriteMealCtx = useContext(FavoritesContext);
    const favoritesMeal = MEALS.filter((meal)=> favoriteMealCtx.ids.includes(meal.id));

    return (
        <MealList items={favoritesMeal}/>
    )
}
export default FavoritesScreen;