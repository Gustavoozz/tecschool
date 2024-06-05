import { Text } from "react-native";
import { ContainerHomeBackGround } from "../../components/ContainerHome/ContainerHome";
import { ContainerHomeHeader } from "../../components/ContainerHome/ContainerHome";
import { ContainerImageHeader } from "../../components/ContainerHome/ContainerHome";
import { ContainerHeaderText } from "../../components/ContainerHome/ContainerHome";
import { ContainerHeaderSubText } from "../../components/ContainerHome/ContainerHome";
import { ToDoListCardHome } from "../../components/ContainerHome/ContainerHome";
import { MateriasCardHome } from "../../components/ContainerHome/ContainerHome";
import { FaltasCardHome } from "../../components/ContainerHome/ContainerHome";
import { ToDoListImageHome } from "../../components/ContainerHome/ContainerHome";
import { MateriasImageHome } from "../../components/ContainerHome/ContainerHome";
import { FaltasImageHome } from "../../components/ContainerHome/ContainerHome";
import { ToDoListTextHome } from "../../components/ContainerHome/ContainerHome";
import { MateriasTextHome } from "../../components/ContainerHome/ContainerHome";
import { FaltasTextHome } from "../../components/ContainerHome/ContainerHome";
import { 
    useFonts,
    Poppins_700Bold
} from "expo-font";

export const Home = () => {
    return(
        <ContainerHomeBackGround>
            <ContainerHomeHeader>
                <ContainerImageHeader/>
                <ContainerHeaderText>Nome</ContainerHeaderText>
                <ContainerHeaderSubText>Turma</ContainerHeaderSubText>
            </ContainerHomeHeader>
            <ToDoListCardHome>
              <ToDoListImageHome/>
              <ToDoListTextHome>To Do List</ToDoListTextHome>
            </ToDoListCardHome>
            <MateriasCardHome>
                <MateriasImageHome/>
                <MateriasTextHome>Materias</MateriasTextHome>
            </MateriasCardHome>
            <FaltasCardHome>
                <FaltasImageHome/>
                <FaltasTextHome>Faltas</FaltasTextHome>
            </FaltasCardHome>
        </ContainerHomeBackGround>  
    )
}