import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

type MealListProps = {
    items:MealItem[]
}

export type MealItem = {
    id:string,
    categoryIds:string[]
    title:string
    affordability:string,
    complexity:string,
    imageUrl:string,
    duration:number
    ingredients:string[]
    steps:string[]
    isGlutenFree:boolean,
    isVegan:boolean,
    isVegetarian:boolean,
    isLactoseFree:boolean
};
function MealList({items}:MealListProps) {
    
    function renderMealItem(itemData:MealItem){ 
        const mealItemProps = {
            title:itemData.title,
            imageUrl:itemData.imageUrl,
            duration:itemData.duration,
            complexity:itemData.complexity,
            affordability:itemData.affordability,
            id:itemData.id
        }
        return <MealItem {...mealItemProps}/>
      }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
}
export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
