import { RootStackParamList } from "@/App";
import CategoryGridTilte from "@/components/CategoryGridTilte";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

type rendeCategoryItemProps = {
    title:string,
    color:string,
    id:string
}

type CategoriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'MealsCategories'>

type CategoriesScreenProp = {
  navigation: CategoriesScreenNavigationProp;
}
 

function CategoriesScreen({navigation}:CategoriesScreenProp) {
  function rendeCategoryItem (item:rendeCategoryItemProps){
  function handlerOnPress (){
    navigation.navigate('MealOverview',{categoryId:item.id});
  }
  return <CategoryGridTilte title={item.title} color={item.color} onPress={handlerOnPress}/>
}

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => rendeCategoryItem(itemData.item)}
      keyExtractor={(itemData) => itemData.id}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
