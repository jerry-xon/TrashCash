import { View, Text, Pressable, StatusBar, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Head = () => {
  return (
    <>
      <View style={styles.nameprofilecontaienr}>
        <View style={styles.hellonamecontainer}>
          <Text style={styles.hellotext}>Hello 👋</Text>
          <Text style={styles.nametext}>Harry Freeman</Text>
        </View>
        <Pressable
          onPress={() => console.log("Pressed")}
          style={styles.profilebutton}
        >
          <Avatar.Image size={52} source={require("../assets/avatar.png")} />
        </Pressable>
      </View>
      <View style={styles.cardcontainer}>
        
        <View style={styles.pointcard}>
          <View style={{position:'absolute',right:0,left:220,bottom:70,top:10,opacity: 0.2,}}>
        <FontAwesome5 name="recycle" size={120} color="#D9D9D9" />
          </View>
          <View style={styles.pointcardcontent}>
            <Avatar.Image size={52} source={require("../assets/avatar.png")} />
            <View style={{ paddingHorizontal: 12, rowGap: 8 }}>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}>
                Your points
              </Text>
              <Text style={{ color: "#fff", fontWeight: 600, fontSize: 24 }}>
                7500
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
            <Text style={styles.nametext}>Harry Freeman</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              flexDirection: "row",
              columnGap: 12,
            }}
          >
            <Pressable
              style={{
                borderRadius: 24,
                backgroundColor: "#26D077",
                paddingHorizontal: 12,
                paddingVertical: 8,
                flexDirection: "row",
                columnGap: 4,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="cash-check"
                size={26}
                color="white"
              />
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
                Redeem Point
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderRadius: 24,
                backgroundColor: "#1B1B25",
                paddingHorizontal: 20,
                paddingVertical: 8,
                flexDirection: "row",
                columnGap: 8,
                alignContent: "center",
                alignItems: "center",
                borderColor: "white",
                borderWidth: 1,
              }}
            >
              <MaterialCommunityIcons name="history" size={24} color="white" />
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
                History
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const Service_menu = () => {
  return (
    <View style={{ paddingHorizontal: 16, bottom: 120 }}>
      <Text style={{ fontSize: 24, fontWeight: 300 }}>Service Menu</Text>
      <View style={{ paddingVertical: 12 }}>
        <Pressable
          onPress={() => console.log("Pressed")}
          style={styles.servicebutton}
        >
          <View style={{flexDirection:'row',columnGap:4 }}>
          <Image
            source={require("../assets/service.png")}
            style={{ width: 60, height: 60, top: 4 }}
          />
          <View style={{ padding: 8, rowGap: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Waste Deposit</Text>
            <Text style={{ fontSize: 16, fontWeight: 300, color: "#6B6F72" }}>
              Earn your points
            </Text>
          </View>
          </View>
          <View style={{alignSelf:'center'}}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.ScreenBG}>
        <Head />
        <Service_menu />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ScreenBG: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  nameprofilecontaienr: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#26D077",
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
    padding: 8,
  },
  profilebutton: {
    paddingVertical: 8,
  },
  pointcard: {
    backgroundColor: "#1B1B25",
    padding: 8,
    alignSelf: "center",
    borderRadius: 10,
    width: "100%",
  },
  cardcontainer: {
    paddingHorizontal: 16,
    alignSelf: "center",
    width: "100%",
    bottom: 140,
  },
  pointcardcontent: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  servicebutton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ECEFF4",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
