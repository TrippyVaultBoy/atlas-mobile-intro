import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import styles from "../assets/styles"

export default function AddActivityScreen() {
    return (
        <View style={styles.container}>
            <Pressable
              style={styles.button}
            >
              <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            
            <Pressable
                style={[styles.button, { backgroundColor: "#D00414" }]}
                onPress={() => {
                    router.push("/");
                }}>
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
        </View>
    )
}