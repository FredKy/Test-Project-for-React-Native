import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";

export default function App() {
  //All functions
  var textInputValue = "<answer goes here>"; //String
  const handlePress = () => console.log(textInputValue) // constant arrow function
  const handleChangeText = () => console.log(textInputValue)  // constant arrow function

  return (
    <View style={styles.container}>

      <View
        style={{ width: "100%", height: "30%", backgroundColor: "#ADD8E6" }}     
      >

        <View style={{paddingTop: 10, paddingBottom: 10}}>
          <Text style={{ fontWeight: "bold", fontSize: 70 }}>Hello World!</Text>
          <Text style={{ fontWeight: "bold", fontSize: 44 }}>First React Native App</Text>
          <Text style={{ fontSize: 40 }}>This is a paragraph explaining what this app is all about.</Text>
          <Text style={{ fontSize: 40 }}>As you can see there are already many components including text, images and buttons.</Text>
        </View>
        
      </View>

      

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>
          {"\n"}What would you like to get out of the course?
        </Text>
      </View>

      <TextInput style={{width: '80%', height: '20%',
        backgroundColor: '#E0E0E0', fontSize: 40}} multiline placeholder="Initial Text" 

      onChangeText={handleChangeText}/>


    <View>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>
          {"\n"}An emoji describing how you are feeling about the course:
        </Text>

        <Image style={{width:200, height:200}} 

      source={require('./assets/icon.png')}

      />

      <View style={{flexDirection: "row"}}>
        <View style={{flex: "0.85"}}></View>

        {/* <Button color="#fff" title="Submit" onPress={handlePress}/> */}
        <TouchableOpacity style={{backgroundColor: "white"}} onPress={handlePress}>
        <Text style={{fontSize: 40, color: "blue"}}>Submit</Text>
        </TouchableOpacity>
      </View>
      

      </View>

      {/* <Text>

        Förälder.
        <Text style={{fontSize:32}}>Barn nummer ett.</Text>
        <Text style={{fontWeight:"bold"}}>  Barn nummer två, och lite JS: {2*2}</Text>

        <Button title="Press me" 

        onPress={() => console.log("Button was pressed")} 

        />


      </Text> */}



        

        

      {/* <Text>Your answer is: {textInputValue}</Text> */}

      

      

      <StatusBar style="auto" />

      {/* <View
        style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}
      >
        <View
          style={{ width: "100%", height: "50%", backgroundColor: "blue" }}
        />

        <View style={{ width: "80%", height: "20%", backgroundColor: "red" }} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "start",
  },
});
