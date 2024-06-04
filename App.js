import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";

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
    <Stack.Navigator
     screenOptions={{
      headerShown: false,
      animation: "fade_from_bottom"
  }}
    >
        <Stack.Screen
            name="VERIFICAR SUA SENHA"
            component={VerificarSenha}
            options={{ title: "VerificarSenha" }}
        />

       
    </Stack.Navigator>
</NavigationContainer>

  );
}
