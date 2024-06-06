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
import { ToDoListSubTextHome } from "../../components/ContainerHome/ContainerHome";
import { MateriasSubTextHome } from "../../components/ContainerHome/ContainerHome";
import { FaltasSubTextHome } from "../../components/ContainerHome/ContainerHome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ToDoListPng } from "../../components/ContainerHome/ContainerHome";
import { MateriasPng } from "../../components/ContainerHome/ContainerHome";
import { FaltasPng } from "../../components/ContainerHome/ContainerHome";
import { ArrowHead } from "../../components/ContainerHome/ContainerHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../Profile/Profile";
import { Subject } from "../Subject/Subject";
import { Main } from "../Main/Main";

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
                    <ToDoListImageHome>
                        <ToDoListPng>
                            <MaterialCommunityIcons name="clipboard-check-multiple-outline" size={36} color="white" />
                        </ToDoListPng>
                    </ToDoListImageHome>
                <ToDoListTextHome>To Do List</ToDoListTextHome>
                    <ArrowHead>
                        <AntDesign name="caretright" size={20} color="#BE9AFF" />
                    </ArrowHead>
                <ToDoListSubTextHome>Faça anotações de suas tarefas</ToDoListSubTextHome>
                </ToDoListCardHome>
                <MateriasCardHome>
                    <MateriasImageHome>
                        <MateriasPng>
                            <MaterialCommunityIcons name="globe-model" size={36} color="white" />
                        </MateriasPng>
                    </MateriasImageHome>
                    <MateriasTextHome>Materias</MateriasTextHome>
                    <ArrowHead>
                        <AntDesign name="caretright" size={20} color="#BE9AFF" />
                    </ArrowHead>
                    <MateriasSubTextHome>Revise suas matérias e pendências</MateriasSubTextHome>
                </MateriasCardHome>
                <FaltasCardHome>
                    <FaltasImageHome>
                        <FaltasPng>
                            <FontAwesome6 name="calendar-xmark" size={36} color="white" />
                        </FaltasPng>
                    </FaltasImageHome>
                    <FaltasTextHome>Faltas</FaltasTextHome>
                    <ArrowHead>
                        <AntDesign name="caretright" size={20} color="#BE9AFF" />
                    </ArrowHead>
                    <FaltasSubTextHome>Confira suas faltas em cada aula</FaltasSubTextHome>
                </FaltasCardHome>
        </ContainerHomeBackGround>

    )
}