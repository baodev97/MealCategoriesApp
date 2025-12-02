import MealList from "@/components/MealList";
import { MEALS } from "@/data/dummy-data";
import { FavoritesContext } from "@/store/context/favorites-context";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen(){
    const favoriteMealCtx = useContext(FavoritesContext);
    const favoritesMeal = MEALS.filter((meal)=> favoriteMealCtx.ids.includes(meal.id));

    if(favoritesMeal.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }

    return (
        <MealList items={favoritesMeal}/>
    )
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})