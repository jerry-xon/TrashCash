import { View, Text, Pressable, StatusBar } from "react-native";
import React from "react";
import { Avatar, Button,Card } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Head = () => {
  return (
    <>
      <View style={styles.nameprofilecontaienr}>
        <View style={styles.hellonamecontainer}>
          <Text style={styles.hellotext}>Hello 👋</Text>
          <Text style={styles.nametext}>Harry Freeman</Text>
        </View>
        <Pressable onPress={() => console.log("Pressed")} style={styles.profilebutton}>
          <Avatar.Image size={52} source={require("../assets/avatar.png")} />
        </Pressable>
      </View>
      {/* <Card style={{width:350,alignSelf:'center',height:200,position:'absolute',top:160}}>
    <View style={{paddingHorizontal:16,backgroundColor:"#1B1B25",borderRadius:12,height:200}}>
      <View style={{flexDirection:'row',padding:12}}>
      <View>
      <Avatar.Image size={52} source={require("../assets/avatar.png")} />
      </View>
      <View style={{paddingHorizontal:12}}>
      <Text style={{color:"#fff"}}>Your points</Text>
      <Text style={{color:"#fff",fontSize:24,fontWeight:600}}>7500</Text>
      </View>
      </View>
     
      
    </View>
  </Card> */}
  <View style={styles.cardcontainer}>
  <Card style={styles.pointcard}>
      <View  style={styles.pointcardcontent}>
       <Avatar.Image size={52} source={require("../assets/avatar.png")} />
       <View style={{paddingHorizontal:12,rowGap:8}}>
        <Text style={{color:"#fff",fontSize:16,fontWeight:400}}>Your points</Text>
        <Text style={{color:"#fff",fontWeight:600,fontSize:24}}>7500</Text>
       </View>
      </View>
      <View style={{paddingHorizontal:16,paddingVertical:12}}>
      <Text style={styles.nametext}>Harry Freeman</Text>
      </View>
      <View style={{paddingHorizontal:16,paddingVertical:16,flexDirection:'row',columnGap:12}}>
        <Pressable style={{borderRadius:24,backgroundColor:'#26D077',paddingHorizontal:12,paddingVertical:8,flexDirection:'row',columnGap:4,alignContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons name="cash-check" size={26} color="white" />
         <Text style={{color:"#fff",fontSize:18,fontWeight:500,}}>Redeem Point</Text>
        </Pressable>
        <Pressable style={{borderRadius:24,backgroundColor:'#1B1B25',paddingHorizontal:20,paddingVertical:8,flexDirection:'row',columnGap:8,alignContent:'center',alignItems:'center',borderColor:'white',borderWidth:1}}>
        <MaterialCommunityIcons name="history" size={24} color="white"/>
         <Text style={{color:"#fff",fontSize:18,fontWeight:500,}}>History</Text>
        </Pressable>
      </View>
  </Card>
  </View>
      
    </>
  );
};

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.ScreenBG}>
        <Head />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ScreenBG: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  nameprofilecontaienr: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#65CE64",
    height: 240,
  },
  hellotext: {
    fontSize: 16,
    color: "#fff",
    
  },
  nametext: {
    fontSize: 20,
    color: "#fff",
  },
  hellonamecontainer: {
    padding:8
  },
  profilebutton:{
    paddingVertical:8
  },
  pointcard:{
    backgroundColor:"#1B1B25",
    padding:8,
    alignSelf:'center',
    
  },
  cardcontainer:{
    paddingHorizontal:16,
    position:'absolute',
    alignSelf:'center',
    top:160,
  },
  pointcardcontent:{
    paddingVertical:8,
    paddingHorizontal:16,
    flexDirection:'row',
    
  }
});
