import { Text,View } from "react-native";
import { Txt } from "../Txt/Txt";
import { toMMHH } from "../../services/date-service";
import { s } from "./clock.style";
import { useEffect, useState } from "react";

export function Clock(){
    const [time,setTime] = useState(toMMHH());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(toMMHH());
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);
    return (
        <>
            <Txt style={s.time}>{time}</Txt>
        </>
    )
}