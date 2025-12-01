import { StyleSheet, Text, View } from "react-native";


type MealDetailProps = {
    duration:number,
    complexity:string,
    affordability:string
}

function MealDetail ({duration,complexity,affordability}:MealDetailProps){
    return <View style={styles.detailsContainer}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
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