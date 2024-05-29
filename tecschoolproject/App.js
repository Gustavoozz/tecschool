import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Login/Login";

// import { Route } from "./src/routes/Routes"

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }
// import das routes

const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
        />
    </Stack.Navigator>
</NavigationContainer>

  );
}
