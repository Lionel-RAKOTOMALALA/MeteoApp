import { Text,View } from "react-native";
import { s } from "./Txt.style";

export function Txt({children}){
    return  <Text style={[s.txt]}>{children}</Text>
}