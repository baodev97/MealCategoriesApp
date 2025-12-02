import { RootStackParamList } from "@/App";
import MealList from "@/components/MealList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

type MealOverviewRouteProp = RouteProp<RootStackParamList, "MealOverview">;
type MealOverviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'MealOverview'>

type MealOverviewScreenProps = {
  route: MealOverviewRouteProp;
  navigation:MealOverviewScreenNavigationProp
};



export default function MealOverviewScreen({ route, navigation}: MealOverviewScreenProps) {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  
  
  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title

  navigation.setOptions({title:categoryTitle})
  },[catId,navigation])

  return (
    <MealList items={displayedMeals}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
