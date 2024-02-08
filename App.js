import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
const color = ["#F7DC6F","#A2D9CE","#D7BDE2"]
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currtenTime, setCurrenTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:color[currtenTime]}]}>
      <View style={{ paddingTop: Platform.OS === "android" && 40 }}>
        <Text style={{ fontSize: 40 }}>Pomodoro</Text>

        <Header
          currtenTime={currtenTime}
          setCurrenTime={setCurrenTime}
          setTime={setTime}
        />
        <Text style={{ fontSize: 40 }}>{time}</Text>


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
});
