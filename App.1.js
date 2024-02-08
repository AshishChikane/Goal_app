import { Text, View, Button, TextInput } from "react-native";
import { styles } from "./App";

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal!" style={styles.Text} />
        <Button title="Add Goal!" />
      </View>
      <Text>List of Goals</Text>
    </View>
  );
}
