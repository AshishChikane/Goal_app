import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appcontainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setModalIsVisible(true)}
        />

        <GoalInput
          onAddGoal={(enteredGoalText) => {
            setCourseGoal((currentCourseGoal) => [
              ...currentCourseGoal,
              { text: enteredGoalText, id: Math.random().toString() },
            ]);
            setModalIsVisible(false);
          }}
          onOpen={modalIsVisible}
          onClose={() => setModalIsVisible(false)}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteData={(id) => {
                    setCourseGoal((currentCourseGoal) => {
                      return currentCourseGoal.filter((goal) => goal.id != id);
                    });
                  }}
                />
              );
            }}
            // to add key
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    // backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
