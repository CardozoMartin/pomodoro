import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
const Header = ({ time }) => {
  return (
    <View style={{flexDirection:"row"}}>
      {options.map((item, index) => (
        <TouchableOpacity key={index} style={style.itemStyle}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
    itemStyle:{
        width:"33%",
        borderWidth:3,
        padding:5,
    }
})

export default Header;
