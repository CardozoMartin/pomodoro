import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
const color = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currtenTime, setCurrenTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    let interval = null;

    if(isActive){
      interval = setInterval(()=>{
        setTime(time-1)
      },1000)
    }else{
      clearInterval(interval)
    }

    if(time === 0){
      setIsActive(false);
      setIsWorking((prev)=>!prev);
      setTime(isWorking ? 300 : 1500)
    }

    return ()=> clearInterval(interval);
  },[isActive,time])
  const handleStarStop = ()=>{
    setIsActive(!isActive)
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: color[currtenTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 40,
        }}
      >
        <Text style={{ fontSize: 40 }}>Pomodoro</Text>

        <Header
          currtenTime={currtenTime}
          setCurrenTime={setCurrenTime}
          setTime={setTime}
        />
        <Timer time={time}></Timer>
        <TouchableOpacity onPress={handleStarStop} style={styles.button}>
          <Text  style={{color:"white", fontWeight:"bold"}}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button:{
    alignItems:"center",
    marginTop:15,
    backgroundColor:"#333333",
    padding:15,
    borderRadius:15
    
  }
});
