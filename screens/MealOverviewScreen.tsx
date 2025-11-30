import { RootStackParamList } from "@/App";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

type MealOverviewRouteProp = RouteProp<
  RootStackParamList,
  'MealOverview'
>;

type MealOverviewScreenProps = {
  route: MealOverviewRouteProp;
};

export default function MealOverviewScreen ({route}:MealOverviewScreenProps){
const catId = route.params?.categoryId
    return (
        <View style={styles.container}>
            <Text>Meal Over View Screen - {catId}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});