import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen() {
  console.log(CATEGORIES);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
}
export default CategoriesScreen;
