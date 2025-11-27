import { View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CategoriesScreen/>
    </View>
  );
}
