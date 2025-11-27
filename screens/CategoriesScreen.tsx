import CategoryGridTilte from "@/components/CategoryGridTilte";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

type rendeCategoryItemProps = {
    title:string,
    color:string
}

function rendeCategoryItem (item:rendeCategoryItemProps){
  return <CategoryGridTilte title={item.title} color={item.color}/>
}


function CategoriesScreen() {
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
