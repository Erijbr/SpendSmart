// import { createStackNavigator } from "@react-navigation/stack";
// import React from "react";
// import SplashView from "../views/auth/SplashView";
// import RegisterView from "../views/auth/RegisterView";
// import LoginView from "../views/auth/LoginView";
// import MainNavigator from "./MainNavigator";

// const Stack = createStackNavigator()

// function AuthNavigator() {
//     return (
//         <Stack.Navigator initialRouteName="SplashView">
//             <Stack.Screen
//                 name="SplashView"
//                 component={SplashView}
//                 options={{headerShown: false, headerStyle: {backgroundColor: 'black' }}}
//             />
//             <Stack.Screen
//                 name="RegisterView"
//                 component={RegisterView}
//                 options={{headerTitle: "", headerStyle: {backgroundColor: 'black' }}}
//             />
//             <Stack.Screen
//                 name="LoginView"
//                 component={LoginView}
//                 options={{headerTitle: "", headerStyle: {backgroundColor: 'black' }}}
//             />
//             <Stack.Screen
//                 name="MainNavigator"
//                 component={MainNavigator}
//                 options={{headerShown: false}}
//             />
//         </Stack.Navigator>
//     )
// }

// export default AuthNavigator
// import { createStackNavigator } from "@react-navigation/stack";
// import React from "react";
// import SplashView from "../views/auth/SplashView";
// import RegisterView from "../views/auth/RegisterView";
// import LoginView from "../views/auth/LoginView";
// import { useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();

// function AuthNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="SplashView">
//       <Stack.Screen
//         name="SplashView"
//         component={SplashView}
//         options={{ headerShown: false, headerStyle: { backgroundColor: 'black' }}}
//       />
//       <Stack.Screen
//         name="RegisterView"
//         component={RegisterView}
//         options={{ headerTitle: "", headerStyle: { backgroundColor: 'black' }}}
//       />
//       <Stack.Screen
//         name="LoginView"
//         component={LoginView}
//         options={{ headerTitle: "", headerStyle: { backgroundColor: 'black' }}}
//       />
//     </Stack.Navigator>
//   );
// }

// export default AuthNavigator;
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashView from "../views/auth/SplashView";
import RegisterView from "../views/auth/RegisterView";
import LoginView from "../views/auth/LoginView";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashView">
      <Stack.Screen
        name="SplashView"
        component={SplashView}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      <Stack.Screen
        name="RegisterView"
        component={RegisterView}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      <Stack.Screen
        name="LoginView"
        component={LoginView}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: 'black' },
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
