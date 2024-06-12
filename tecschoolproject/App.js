import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Login/Login";
import { Register } from "./src/screens/Register/Register";
<<<<<<< HEAD
=======
import { Home } from "./src/screens/Home/Home";
import { Main } from "./src/screens/Main/Main";
import { Profile } from "./src/screens/Profile/Profile";
import { ToDoList } from "./src/screens/ToDoList/ToDoList";
import { Subject } from "./src/screens/Subject/Subject";
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82

// import { Route } from "./src/routes/Routes"

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  
// import das routes
const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false,
      animation: "fade_from_bottom"
  }}
    >
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
        />

<<<<<<< HEAD
=======
        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
        />
  
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82

        <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
        />
<<<<<<< HEAD
=======

        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
        />

        <Stack.Screen
            name="ToDoList"
            component={ToDoList}
            options={{ title: "ToDoList" }}
        />

        <Stack.Screen
            name="Subject"
            component={Subject}
            options={{ title: "Subject" }}
        />

        
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82
    </Stack.Navigator>
</NavigationContainer>

  );
}
