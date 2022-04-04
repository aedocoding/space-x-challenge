import * as React from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { ScreenType } from "../../Types/types";

interface CreateLaunchProps {
  navigatorFunction: (param: ScreenType) => void;
}

const CreateLaunch: React.FunctionComponent<CreateLaunchProps> = ({
  navigatorFunction,
}) => {
  return (
    <View style={styles.container}>
<TouchableOpacity>
  <View style={{ alignItems: 'center'}}>
    <View style={{borderWidth: 1, width: 175, height: 175, marginTop: 50}}/>
    <Text>
      Click to add
    </Text>
  </View>
  </TouchableOpacity>      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={"Name..."}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Description..."}
        ></TextInput>
      </View>

      <View style={styles.backSubmitContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigatorFunction("LaunchList")}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={styles.submitButton}>
          <Button title={"Submit"} onPress={() => console.log("test")} />
        </View>
      </View>
    </View>
  );
};

export default CreateLaunch;

const styles = StyleSheet.create({
  wrapper: { flexDirection: "column", margin: 10 },
  container: { width: "100%", height: '100%', padding: 5 },
  inputContainer: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5
  },
  input: {},
  backSubmitContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    flex: 1,
  },
  submitButton: {
    flex: 4,
    borderWidth: 1,
  },
});
