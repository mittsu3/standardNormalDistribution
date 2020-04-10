import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

const sNormalDistStd = (x) => {
  var b0 = 0.2316419;
  var b1 = 0.31938153;
  var b2 = -0.356563782;
  var b3 = 1.781477937;
  var b4 = -1.821255978;
  var b5 = 1.330274429;
  var t = 1 / (1 + b0 * Math.abs(x));
  var z01 = Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI);
  var s = 1 - z01 * ((((b5 * t + b4) * t + b3) * t + b2) * t + b1) * t;
  if (x > 0) return s;
  else return 1 - s;
};

export default function App() {
  const [value, onChangeText] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.inputArea}>
        <Text style={styles.explainText}>Z値</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View>
        <Text style={styles.explainText}>確率φ(Z)の値</Text>
      </View>
      <View style={styles.outputArea}>
        <Text style={styles.outputText}>
          {Math.round((1 - sNormalDistStd(Number(value))) * 100000000000) /
            100000000000}
        </Text>
      </View>
      <View style={styles.bottomContainer}></View>
      <AdMobBanner
        adUnitID={
          __DEV__
            ? "ca-app-pub-2659333027229908/7589533330" // テスト広告
            : Platform.select({
                ios: "ca-app-pub-2659333027229908/7589533330",
                android: "ca-app-pub-2659333027229908/7589533330", // android
              })
        }
        // onDidFailToReceiveAdWithError={this.bannerError}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "50%",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 50,
    justifyContent: "center",
    textAlign: "center",
  },
  inputArea: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  outputArea: {
    flex: 1,
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  outputText: {
    fontSize: 40,
  },
  explainText: {
    fontSize: 30,
  },
});
