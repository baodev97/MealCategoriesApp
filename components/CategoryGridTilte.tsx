import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type CategoryGridTilteProps = {
  title: string;
  color: string;
  onPress: ()=>void;
};

function CategoryGridTilte({ title, color, onPress}: CategoryGridTilteProps) {
  return (
    <View style={Styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          Styles.button,
          pressed ? Styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[Styles.inneContainer, { backgroundColor: color }]}>
          <Text style={Styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTilte;

const Styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  inneContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
