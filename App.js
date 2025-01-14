import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Home} from "./pages/Home/Home";
import { s } from "./App.style";
import { ImageBackground } from "react-native";
import  backgroundImg  from "./assets/backgroundd.jpeg";
import { Text } from "react-native";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf"
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular" : AlataRegular
  });
  console.log(isFontLoaded);
  return(
    <ImageBackground 
    source={backgroundImg}
     style={s.img_background}
      imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
        {
          isFontLoaded ? <Home /> : null
        }
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
);
}
