import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

export type RootStackParamList = {
    MealsCatgories: undefined,
    MealOverview:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MealsCatgories" component={CategoriesScreen}/>
            <Stack.Screen name="MealOverview" component={MealOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  app: {
    backgroundColor: "#24180f",
  },
  container: {},
});
