import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF9E6",
    flex: 1,
  },
  
  heading: {
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
  },

  activity: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "#000000",
  },
  activityDate: {
    color: "black"
  },
  activitySteps: {
    fontSize: 24,
  },

  action: {
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#D00414",
  },
  actionText: {
    color: "white"
  },

  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  textInput: {
    width: "100%",
    backgroundColor: "#FFFEFE",
    borderColor: "#000000",
    borderWidth: 2,
    padding: 8,
    marginBottom: 10,
    color: "black"
  },
  inputText: {
    color: "#666666",
  }
})

export default styles;