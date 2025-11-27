import { Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen() {
  console.log(CATEGORIES);

  return (
    <View>
      {CATEGORIES.map((itemData) => 
        <Text key={itemData.id}>{itemData.title}</Text>
      )}
    </View>
  );
}
export default CategoriesScreen;
