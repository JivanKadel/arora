import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {Text, View, StyleSheet} from "react-native";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
      <View style={styles.container}>
        <Text>Hello there React Native</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
