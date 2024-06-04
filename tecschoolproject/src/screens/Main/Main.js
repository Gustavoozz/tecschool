
import { ContentIcon, TextIcon } from "./Style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Home from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { ContainerHome } from "../../components/Container/Style";

const bottomTab = createBottomTabNavigator();

export const Main = ({ navigation, route }) => {
  const routeParams = route.params
  

  return (
    <bottomTab.Navigator
      
      initialRouteName={"Home"}

      screenOptions={ ({ route }) => ({
        tabBarStyle: {  backgroundColor: '#FFFFFF', height: 60, width: '100%'},
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#E6C8FF" : "transparent"
                }
              >
               
               <AntDesign name="home" size={22} color={focused ? "#BE9AFF" : "#4E4B59"} />
                {focused && <TextIcon color={focused ? "#BE9AFF" : "#4E4B59"}>Home</TextIcon>}
              </ContentIcon>
            );

              } else {
                return (
                  <ContentIcon
                    tabBarActiveBackgroundColor={
                      focused ? "#E6C8FF" : "transparent"
                    }
                  >
                   
                   <Feather name="user" size={22} color={focused ? "#BE9AFF" : "#4E4B59"} />
                    {focused && <TextIcon color={focused ? "#BE9AFF" : "#4E4B59"}>Perfil</TextIcon>}
                  </ContentIcon>
                );
              }
        }
      })}
    >


      <bottomTab.Screen name="Home" component={Home}/>
      <bottomTab.Screen name="Profile" component={Profile}/>

      </bottomTab.Navigator>
  );
};