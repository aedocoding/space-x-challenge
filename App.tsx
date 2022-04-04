import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { ScreenType } from "./Types/types";
import { LaunchList, CreateLaunch } from "./Screens";
export default function App() {
  const [screen, setScreen] = useState<ScreenType>("LaunchList");
  return (
    <View style={styles.container}>
      {screen === "LaunchList" ? (
        <LaunchList navigatorFunction={setScreen} />
      ) : screen === "CreateLaunch" ? (
        <CreateLaunch navigatorFunction={setScreen} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
