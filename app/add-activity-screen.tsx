import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import styles from "../assets/styles"
import { useState } from "react";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function AddActivityScreen() {
    const [steps, setSteps] = useState<number>(0);
    const {insertActivity} = useActivitiesContext();
    return (
        <View style={[styles.container, {justifyContent: "center", alignItems: "center"}]}>
            <Text style={styles.heading}>
                Add Activity Screen
            </Text>
            
            <TextInput
                style={styles.textInput}
                placeholder="Enter steps"
                placeholderTextColor="black"
                keyboardType="number-pad"
                onChangeText={(value) => setSteps(parseInt(value))}
            />

            {/* Add activity button */}
            <Pressable
                onPress = {() => {
                    insertActivity(steps, new Date());
                    router.push("/");
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            
            {/* Go back button */}
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