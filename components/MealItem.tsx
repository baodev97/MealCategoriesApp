import { Image, Pressable, StyleSheet, Text, View } from "react-native"

type MealItemProps = {
    title: string,
    imageUrl:string

}
function MealItem({title, imageUrl}: MealItemProps){
    return <View>
        <Pressable>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    </View>
}
export default MealItem

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    }
})