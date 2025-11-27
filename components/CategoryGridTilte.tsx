import { Pressable, Text, View } from "react-native";

type CategoryGridTilteProps = {
    title:string,
    color:string
}

function CategoryGridTilte ({title,color}: CategoryGridTilteProps){
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text> 
            </View>    
        </Pressable> 
    </View>
}

export default CategoryGridTilte;