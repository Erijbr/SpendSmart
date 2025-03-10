// import "react-native-gesture-handler";
// import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import AuthNavigator from "./src/routes/AuthNavigator";
// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Alert } from "react-native";
// import MainNavigator from "./src/routes/MainNavigator";

// export default function App() {

//   const [currentUser, setCurrentUser] = useState(null)

//   const fetchCurrentUser = async () => {
//     try {
//       const user = await AsyncStorage.getItem('userId')
//       setCurrentUser(user)
//     } catch (e) {
//       Alert.alert("Error!", e.message)
//     }
//   }

//   useEffect(() => {
//     fetchCurrentUser()
//   }, [])

//   return (
//     <NavigationContainer theme={DarkTheme}>
//       <StatusBar style="light" />
//       {currentUser ? <MainNavigator /> : <AuthNavigator />}
//     </NavigationContainer>
//   );
// }
// import "react-native-gesture-handler";
// import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Alert } from "react-native";
// import AuthNavigator from "./src/routes/AuthNavigator";
// import MainNavigator from "./src/routes/MainNavigator";

// export default function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   const fetchCurrentUser = async () => {
//     try {
//       const user = await AsyncStorage.getItem('userId');
//       setCurrentUser(user);
//     } catch (e) {
//       Alert.alert("Error!", e.message);
//     }
//   };

//   useEffect(() => {
//     fetchCurrentUser();
//   }, [currentUser]);

//   return (
//     <NavigationContainer theme={DarkTheme}>
//       <StatusBar style="light" />
//       {currentUser ? <MainNavigator /> : <AuthNavigator />}
//     </NavigationContainer>
//   );
// }
import "react-native-gesture-handler";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import AuthNavigator from "./src/routes/AuthNavigator";
import MainNavigator from "./src/routes/MainNavigator";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const user = await AsyncStorage.getItem('userId');
      setCurrentUser(user);
    } catch (e) {
      Alert.alert("Error!", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (isLoading) {
    return null; // Placeholder pour un splash screen ou un loader
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      {currentUser ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
