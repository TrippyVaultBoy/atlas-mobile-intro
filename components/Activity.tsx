import { Activity as ActivityType } from "@/hooks/useActivities";
import { Text, View } from "react-native";
import styles from "../assets/styles"

export default function Activity({ activity }: { activity: ActivityType}) {
    return (
        <View style={styles.activity}>
            <Text>
                <Text style={styles.activityDate}>
                    {new Date(activity.date).toLocaleDateString()},{" "}
                </Text>
                <Text>
                    {new Date(activity.date).toTimeString().split(" ")[0]}
                </Text>
            </Text>
            <Text style={styles.activitySteps}>
                Steps: {activity.steps}
            </Text>
        </View>
    );
}