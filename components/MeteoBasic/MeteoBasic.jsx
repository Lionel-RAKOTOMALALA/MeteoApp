import { Text,View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Image } from "react-native";
import { Clock } from "../clock/Clock";

export function MeteoBasic({temperature, city,interpretation}){
    return(
        <>
        <View style={s.clock}>
            <Clock/>
        </View>

            <Txt>{city}</Txt>
        <View style={s.weather_label}>

            <Text style={s.label}>{interpretation.label}</Text>
        </View>

        <View style={s.temperature_box}>
            <Text style={s.temperature}>{temperature}°</Text>
            <Image style={s.image} source={interpretation.image}/>
        </View>
        </>
    )
}