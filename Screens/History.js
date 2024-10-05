import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import { React } from "react";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DetailCard = () => {
  return (
    <View style={styles.cardcontainer}>
      <View style={styles.Card}>
        <View>
          <Text style={styles.cardtitle}>Garbage Deposit Successful</Text>
          <Text style={styles.pointsText}>+ 150 Points</Text>
        </View>
        <View style={styles.daydatecontiner}>
          <Text style={styles.dateText}>Date</Text>
          <Text style={styles.date}>Wednesday, July 3,2024</Text>
        </View>
        <View style={styles.WasteDetails}>
          <Text style={styles.type}>Type of Waste</Text>
          <Text style={styles.weight}>Waste Weight x Price</Text>
          <Text style={styles.total}>Total</Text>
        </View>
      </View>
    </View>
  );
};

export default function History() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenBG}>
      <ScrollView>
        <View style={styles.head}>
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
          <View style={styles.historycontainer}>
            <Text style={styles.profileText}>History</Text>
          </View>
        </View>
        <DetailCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenBG: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  profileText: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    padding: 8,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  historycontainer: {
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
  },
  backbutton: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  Card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 16,
  },
  cardcontainer: {
    paddingHorizontal: 16,
  },
  cardtitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  pointsText: {
    fontSize: 20,
    textAlign: "center",
    color: "#26D077",
    fontWeight: "600",
    paddingTop: 8,
  },
  daydatecontiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#78797B",
  },

  date: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  WasteDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  type: {
    fontSize: 16,
    fontWeight: "400",
    color: "#78797B",
  },
  weight: {
    fontSize: 16,
    fontWeight: "400",
    color: "#78797B",
  },
  total: {
    fontSize: 16,
    fontWeight: "400",
    color: "#78797B",
  },
});
