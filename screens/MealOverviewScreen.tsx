import { RootStackParamList } from "@/App";
import MealItem from "@/components/MealItem";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

type MealOverviewRouteProp = RouteProp<RootStackParamList, "MealOverview">;
type MealOverviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'MealOverview'>

type MealOverviewScreenProps = {
  route: MealOverviewRouteProp;
  navigation:MealOverviewScreenNavigationProp
};

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


export default function MealOverviewScreen({ route, navigation}: MealOverviewScreenProps) {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData:MealItem){ 
    const mealItemProps = {
        title:itemData.title,
        imageUrl:itemData.imageUrl,
        duration:itemData.duration,
        complexity:itemData.complexity,
        affordability:itemData.affordability
    }
    return <MealItem {...mealItemProps}/>
  }
  
  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title

  navigation.setOptions({title:categoryTitle})
  },[catId,navigation])

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={(itemData)=>renderMealItem(itemData.item)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
