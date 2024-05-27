import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    clock:{
        alignItems : "flex-end",
    },
    weather_label : {
        alignItems : "flex-end",
        top : 20,
        marginLeft : 281, 
        transform : [{rotate:" -90deg"}],
    },
    image : {
        height : 90,
        width : 90,
    },
    temperature_box : {
        alignItems : "baseline",
        flexDirection : "row",
        justifyContent : "space-between",
    },
    temperature : {
        fontSize : 120,
        color : "white",
        fontFamily : "Alata-Regular"
    },
    label : {
            fontSize : 17.4,
            color : "white",
            fontFamily : "Alata-Regular"
        
    }  
});
export{s};