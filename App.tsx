import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealOverview: { categoryId: string } | undefined;
  MealDetail: { mealId: string } | undefined;
};
export type RootDrawerParamList = {
  MealsCategories: undefined;
  MealsFavarioty:undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen}/>
      <Drawer.Screen name="MealsFavarioty" component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
}
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
            component={DrawerNavigator}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
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
