import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import styles from "../assets/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Add activity button */}
      <Pressable
        style={styles.button}
        onPress={() => {
        router.push("/add-activity-screen");
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>

      <Pressable
        style={[styles.button, {backgroundColor: "#D00414"}]}
      >
        <Text style={styles.buttonText}>Delete all activities</Text>
      </Pressable>
    </View>
  );
}