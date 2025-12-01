import { StyleSheet, Text, View } from "react-native";


type MealDetailProps = {
    duration:number,
    complexity:string,
    affordability:string,
    style?:object,
    textStyle?:object
}

function MealDetail ({duration,complexity,affordability,style,textStyle}:MealDetailProps){
    return <View style={[styles.detailsContainer, style]}>
                <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
                <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
                <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
              </View>
}
export default MealDetail;

const styles = StyleSheet.create({
    detailsContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});