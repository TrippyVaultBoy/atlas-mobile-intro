import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF9E6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  heading: {
    fontSize: 24,
  },
  
  /* Button Styles */
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
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    color: "black"
  },
  inputText: {
    color: "#666666",
  }
})

export default styles;