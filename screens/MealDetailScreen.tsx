import { RootStackParamList } from "@/App";
import MealDetail from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";

type MealDetailRouteProp = RouteProp<RootStackParamList, "MealDetail">;
export type MealDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetail"
>;

type MealDetailScreenProps = {
  route: MealDetailRouteProp;
  navigation: MealDetailNavigationProp;
};

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text>{selectedMeal?.title}</Text>
      <View>
        <MealDetail
          duration={selectedMeal?.duration}
          complexity={selectedMeal?.complexity}
          affordability={selectedMeal?.affordability}
        />
      </View>
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
