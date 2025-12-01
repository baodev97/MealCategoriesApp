import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type SubTitleProps = {
    children: ReactNode
}


function SubTitle({children}:SubTitleProps) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
