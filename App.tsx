import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealOverview: { categoryId: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#24180f" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#845b3cff" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} options={({route,navigation})=>{
            const catId = route.params?.categoryId
            return {
                title:catId
            }
          }}/>
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
