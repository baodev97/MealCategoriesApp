import { RootStackParamList } from "@/App";
import List from "@/components/MealDetail/List";
import SubTitle from "@/components/MealDetail/Subtitle";
import MealDetail from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View>
        <MealDetail
          duration={selectedMeal?.duration}
          complexity={selectedMeal?.complexity}
          affordability={selectedMeal?.affordability}
          textStyle={styles.textMealDetail}
        />
      </View>
      <View style={styles.listOutnerContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textMealDetail: {
    color: "white",
  },
  listOutnerContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
