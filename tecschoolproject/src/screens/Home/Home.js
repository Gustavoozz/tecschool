import { CardHome } from "../../components/CardHome/CardHome"
import { ContainerHome } from "../../components/Container/Style"
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";

export const Home = ({ navigation }) => {
  const [tipoUsuario, setTipoUsuario] = useState("");


    
  // FUNCTIONS
  const ProfileLoad = async () => {

      const token = await UserDecodeToken();

      setTipoUsuario(token.role);
  }

  useEffect(() => {
    ProfileLoad();
}, [])


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
                taskSubTitle="Revise suas matérias"
                />

                <CardHome
                navigation={tipoUsuario == 'Aluno' ? () => (navigation.replace("FaltasAluno")) : () => (navigation.replace("FaltasProfessor"))}
                icon={<Feather name="x" size={35} color="white" />}
                taskTitle="Faltas"
                taskSubTitle="Confira suas faltas em cada aula"
                />
        </ContainerHome>
    )
}

export default Home;