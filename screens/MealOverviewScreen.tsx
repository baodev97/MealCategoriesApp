import { RootStackParamList } from "@/App";
import MealItem from "@/components/MealItem";
import { MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";

type MealOverviewRouteProp = RouteProp<RootStackParamList, "MealOverview">;

type MealOverviewScreenProps = {
  route: MealOverviewRouteProp;
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


export default function MealOverviewScreen({ route }: MealOverviewScreenProps) {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData:MealItem){
    return <MealItem title={itemData.title} imageUrl={itemData.imageUrl}/>
  }
  
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
