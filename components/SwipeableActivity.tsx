import { Alert, Text, View } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import styles from "@/assets/styles";
import { useActivitiesContext } from "./ActivitiesProvider";

export  default function SwipeableActivity({ activity }: {activity: any }) {
    const {deleteActivity} = useActivitiesContext();
    return (
        <View key={activity.id}>
            <Swipeable
                renderLeftActions={() => <Action text="Delete"/>}
                renderRightActions={() => <Action text="Delete"/>}
                onSwipeableOpen={() => {
                    deleteActivity(activity.id);
                }}
            >
                <Activity activity={activity}/>
            </Swipeable>
        </View>
    );
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.action}>
            <Text style={styles.actionText}>{text}</Text>
        </View>
    );
};