import { CardHome } from "../../components/CardHome/CardHome"
import { ContainerHome } from "../../components/Container/Style"
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Header } from "../../components/Header/Header";

export const Home = ({ navigation }) => {
    return(
        <ContainerHome>
            <Header />

                <CardHome
                navigation={() => (navigation.replace("ToDoList"))}
                icon={<Octicons name="checklist" size={30} color="white" />}
                taskTitle="To Do List"
                taskSubTitle="Faça anotações de suas tarefas"
                />

                <CardHome
                navigation={() => (navigation.replace("Subject"))}
                icon={<Entypo name="globe" size={30} color="white"/>}
                taskTitle="Matérias"
                taskSubTitle="Revise suas matérias e pendências"
                />

                <CardHome
                icon={<Feather name="x" size={35} color="white" />}
                taskTitle="Faltas"
                taskSubTitle="Confira suas faltas em cada aula"
                />
        </ContainerHome>
    )
}

export default Home;