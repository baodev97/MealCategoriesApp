import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <SafeAreaView style={Platform.OS === 'ios'? styles.app :null}>
      <CategoriesScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  app: {
    backgroundColor: "#24180f",
  },
  container: {},
});
