import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome to Walky</Text>
      <Button onPress={()=>Alert.alert("you pressed the button!")} 
      title = 'Enter'
      accessibilityLabel='Press this button to popup an alert!'
       color="white"  />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 36,
    color: 'orange',
    fontWeight: "900",
    textAlign: "center",
  }
});
