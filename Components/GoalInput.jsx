import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ onAddGoal, onOpen, onClose }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  return (
    <Modal visible={onOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/goal2.jpg")}
        />
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChangeText={(e) => {
            setEnteredGoalText(e);
          }}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={() => {
                onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});
