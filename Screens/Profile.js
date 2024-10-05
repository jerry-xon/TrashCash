import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Userdetails = () => {
  return (
    <View style={styles.userdetails}>
      <View style={styles.useravatarandname}>
        <View>
          <Avatar.Image size={52} source={require("../assets/avatar.png")} />
        </View>
        <View style={styles.nameandemail}>
          <Text style={styles.username}>Harry Freeman</Text>
          <Text style={styles.emailtext}>harry1968@gmail.com</Text>
        </View>
      </View>
      <View>
        <View style={styles.settingicon}>
          <Feather name="settings" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const AccountDetails = () => {
  return (
    <>
      <View style={styles.Accountdetails}>
        <Text style={styles.accountText}>Account</Text>
      </View>
      <View style={styles.accountoptions}>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={24} color="black" />
          </View>
          <Text style={styles.buttonText}>Edit Profile</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Feather name="bell" size={24} color="black" />
          </View>
          <Text style={styles.buttonText}>Notifications</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="history" size={24} color="black" />
          </View>
          <Text style={styles.buttonText}>History</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainerlogout}>
          <View style={styles.iconContainerlogout}>
            <MaterialIcons name="logout" size={24} color="#DA2143" />
          </View>
          <Text style={styles.buttonTextlogout}>Logout</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="#DA2143"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingTop: 12,
          }}
        >
          <View>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backbutton}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
          </View>
          <View style={{ width: "75%" }}>
            <Text style={styles.profileText}>Profile</Text>
          </View>
        </View>
        <Userdetails />
        <AccountDetails />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileText: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    padding: 8,
  },
  useravatarandname: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    columnGap: 12,
  },
  userdetails: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
  },
  nameandemail: {
    flexDirection: "column",
  },
  emailtext: {
    fontSize: 16,
    color: "#6c6c6c",
    fontWeight: "400",
    paddingTop: 8,
  },
  settingicon: {
    borderRadius: 24,
    backgroundColor: "#26D077",
    padding: 10,
  },
  Accountdetails: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 24,
  },
  accountText: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  buttonContainerlogout: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#F1E5E9",
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  iconContainerlogout: {
    backgroundColor: "#FFF0F3",
    borderRadius: 50,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#D58E9E",
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  buttonTextlogout: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#DA2143",
  },
  arrowIcon: {
    marginLeft: 12,
  },
  accountoptions: {
    rowGap: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backbutton: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
});
