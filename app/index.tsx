import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import styles from "../assets/styles";
import { useActivities } from "@/hooks/useActivities";
import Activity from "@/components/Activity";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  const {activities} = useActivitiesContext();
  const {deleteActivities} = useActivitiesContext();
  return (
    <View style={styles.container}>
      {/* {activities.map((activity) => (
        <Text key={activity.id}>
          {activity.steps} steps on {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))} */}

      <FlashList
        renderItem={({ item }) => <Activity activity={item}/>}
        data={activities}
      />

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
        onPress={() => {
          deleteActivities();
        }}
      >
        <Text style={styles.buttonText}>Delete all activities</Text>
      </Pressable>
    </View>
  );
}