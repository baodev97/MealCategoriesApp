import { RootStackParamList } from "@/App";
import { MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

type MealDetailRouteProp = RouteProp<RootStackParamList, "MealDetail">;
export type MealDetailNavigationProp = NativeStackNavigationProp<RootStackParamList,'MealDetail'>

type MealDetailScreenProps = {
  route: MealDetailRouteProp;
  navigation:MealDetailNavigationProp
};

function MealDetailScreen({route,navigation}:MealDetailScreenProps){
    const mealId = route.params?.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)

    return <View>
        <Text>Meal Detail Screen - {mealId}</Text>
    </View>
};

export default MealDetailScreen;

