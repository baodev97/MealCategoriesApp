import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealOverview: { categoryId: string } | undefined;
  MealDetail: { mealId: string };
};
export type RootDrawerParamList = {
  MealsCategories: undefined;
  MealsFavarioty:undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#24180f'},
      headerTintColor:'#ffffff',
      sceneStyle:{backgroundColor:'#845b3cff'},
      drawerContentStyle:{backgroundColor:'#845b3cff'},
      drawerInactiveTintColor:'#ffffff',
      drawerActiveTintColor:'#2a1504ff',
      drawerActiveBackgroundColor:'#f4d8c2ff'
    }}>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} options={{
        title:'All categories',
        drawerIcon:({size, color})=> <Ionicons size={size} color={color} name='list'/>
      }}/>
      <Drawer.Screen name="MealsFavarioty" component={FavoritesScreen} options={{
        title:'Meals Favorites',
        drawerIcon:({size, color})=> <Ionicons size={size} color={color} name='star'/>
      }}/>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
              headerShown:false
            }}
          />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  app: {
    backgroundColor: "#24180f",
  },
  container: {},
});
