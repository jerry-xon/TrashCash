import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BodyText, InfoText, OtpText } from "../Components/common/Typography";

export default function Otp({
  onSubmit,
  otpText,
  onInputChange,
  errorMsg,
  isLoading,
}) {
  return (
    <SafeAreaView style={styles.screenBG}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View>
            <OtpText text={`Enter OTP`} weight={"600"} color={"#000000"} />
          </View>
          <View style={styles.inputContainer}>
            <BodyText text={`OTP`} weight={"400"} color={"#9796A1"} />

            <TextInput
              keyboardType="numeric"
              style={styles.Input}
              placeholder="Your OTP here..."
              value={otpText}
              onChangeText={onInputChange}
            />
           
              <InfoText
                text={errorMsg}
                color="#000000"
                weight={"500"}
              />
  
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.LoginButtonContainer}>
            <Pressable onPress={onSubmit} style={styles.LoginButton}>
              <BodyText
                text={isLoading ? "Logging in..." : "LOGIN"}
                weight={"600"}
                color={"#FFFFFF"}
              />
            </Pressable>
          </View>
          <View style={styles.TCcontainer}>
            <InfoText
              text={`By Continuing, you agree to our`}
              weight={"500"}
              color={"#9796A1"}
            />

            <Pressable
              style={styles.ViewTnC}
              onPress={() => console.log("Terms & Conditions")}
            >
              <InfoText
                text={` Terms & Conditions and Privacy Policy`}
                weight={"500"}
                color={"#9796A1"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenBG: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    flex: 1,
    marginTop: "40%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  topSection: {
    rowGap: 32,
  },
  bottomSection: {
    rowGap: 60,
  },
  inputContainer: {
    rowGap: 8,
  },

  Input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },

  LoginButtonContainer: {
    alignItems: "center",
  },
  LoginButton: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 28,
  },
  TCcontainer: {
    alignItems: "center",
  },

  ViewTnC: {
    borderBottomWidth: 1,
    borderBottomColor: "#9796A1",
  },
});
