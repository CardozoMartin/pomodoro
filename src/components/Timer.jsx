import { StyleSheet, Text, View } from "react-native"


const Timer = ( {time}) => {
    const formattedTime = `${Math.floor(time/60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
  return (
    <View style={style.container}>
        <Text style={style.time}>{formattedTime}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:0.2,
        justifyContent:"center",
        backgroundColor: "#f2f2f2",
        padding:15,
        borderRadius:15,
    },
    time:{
        fontSize:80,
        fontWeight:"bold",
        textAlign:"center"
    }
})

export default Timer