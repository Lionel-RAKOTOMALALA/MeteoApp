const WEATHER_INTERPRETATIONS = [
    
    {
        codes : [0],
        image : require("../assets/sun.png"),
        label : "Ensoleillé"
    },
    {
        codes : [1,2,3,45,48],
        image : require("../assets/clouds.png"),
        label : "Nuageux"
    },
    {
        codes : [51,53,55,56,57,61,63,65,66,67,80,81,82,85,86],
        image : require("../assets/rain.png"),
        label : "Pluvieux"
    },
    {
        codes : [71,73,75,77],
        image : require("../assets/snow.png"),
        label : "Neigeux"
    },
    {
        codes : [96,99],
        image : require("../assets/thunder.png"),
        label : "Orageux"
    },
];


export function getWeatherInterpretation(code){
    return WEATHER_INTERPRETATIONS.find(interpretation=>interpretation.codes.includes(code))
}