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
import { Home } from "./src/screens/Home/Home";
import { Main } from "./src/screens/Main/Main";
import { Profile } from "./src/screens/Profile/Profile";
import { ToDoList } from "./src/screens/ToDoList/ToDoList";
import { Subject } from "./src/screens/Subject/Subject";
import { RedefinirSuaSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";
import { VerificarCodigo } from "./src/screens/VerificarCodigo/VerificarCodigo";
import { FaltasAluno } from "./src/screens/FaltasAluno/FaltasAluno";
import { FaltasProfessor } from "./src/screens/FaltasProfessor/FaltasProfessor";
import { SelecionarTurma } from "./src/screens/SelecionarTurma/SelecionarTurma";



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

        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
        />
  

        <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
        />

        <Stack.Screen
            name="SelecionarTurma"
            component={SelecionarTurma}
            options={{ title: "SelecionarTurma" }}
        />

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
        
        <Stack.Screen
            name="VerificarSenha"
            component={VerificarEmail}
            options={{ title: "VerificarSenha" }}
        />

      <Stack.Screen
            name="VerificarCodigo"
            component={VerificarCodigo}
            options={{ title: "VerificarCodigo" }}
        />



        <Stack.Screen
            name="RedefinirSenha"
            component={RedefinirSuaSenha}
            options={{ title: "RedefinirSenha" }}
        />

        


<Stack.Screen
            name="FaltasAluno"
            component={FaltasAluno}
            options={{ title: "FaltasAluno" }}
        />

        
<Stack.Screen
            name="FaltasProfessor"
            component={FaltasProfessor}
            options={{ title: "FaltasProfessor" }}
        />







        
    </Stack.Navigator>
</NavigationContainer>

  );
}
