import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
const Header = ({ setTime, currenTime, setCurrenTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrenTime(index);
    setTime(newTime * 60);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            handlePress(index);
          }}
          style={[
            style.itemStyle,
            currenTime !== index && { borderColor: "black",color:"white" },
          ]}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    alignItems:"center",
    padding: 5,
    borderRadius:10,
    borderBlockColor:"white",
    marginVertical:20
  },
});

export default Header;
