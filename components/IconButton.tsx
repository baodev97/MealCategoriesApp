import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from "react-native";

type IconButtonProps = {
    onPress: () => void
}

function IconButton ({onPress}:IconButtonProps){
    return (
    <Pressable onPress={onPress}>
        <Ionicons name='star' size={32} color="white"/>
    </Pressable>
    )
}
export default IconButton;

