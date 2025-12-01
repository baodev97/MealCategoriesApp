import { MealDetailNavigationProp } from "@/screens/MealDetailScreen";
import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import MealDetail from "./MealDetails";

type MealItemProps = {
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  id: string;
};
function MealItem({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  id,
}: MealItemProps) {
  const navigation = useNavigation<MealDetailNavigationProp>();
  function handleOnpressMeal() {
    navigation.navigate("MealDetail", { mealId: id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={handleOnpressMeal}
      >
        <View style={styles.innerMealItem}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerMealItem: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
