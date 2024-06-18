import { useEffect, useState } from "react";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { ContainerScroll } from "../../components/Container/Style"
import { LinkText, SemiBoldText, Title } from "../../components/Title/Title"
import { CardTask } from "../../components/CardTask/CardTask";
import { UserDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TaskModal } from "../../components/TaskModal/TaskModal";
import { CardTurma } from "../../components/CardTurma/CardTurma";
import { TurmaModal } from "../../components/TurmaModal/TurmaModal";

export const ToDoList = ({ navigation }) => {
    const [dataSelecionada, setDataSelecionada] = useState('');
    const [token, setToken] = useState('');
    const [ListaDeAtividades, setListaDeAtividades] = useState('');
    const [showModalTask, setShowModalTask] = useState(false)
    const [showModalTurma, setShowModalTurma] = useState(false)
    const [idTurma, setIdTurma] = useState(null);

    async function profileLoad() {
        const token = await UserDecodeToken();

        if (token !== null) {

            setToken(token);
        }
    }

    async function ListarTurmas() {
        await api.get("/Turma/Listar").then((response) => console.log(response.data)).catch((error) => console.log(error));
    }

    useEffect(() => {
        profileLoad();
    }, [])

    useEffect(() => {
        BuscarAtividades();
    }, [dataSelecionada])

    useEffect(() => {
        console.log("IdTurma: " + idTurma);
    }, [idTurma])

    console.log(ListaDeAtividades)

    async function BuscarAtividades() {
        if (dataSelecionada != null && token.user != null) {
            await api.get(`/Atividade/BuscarPorData?data=${dataSelecionada}&IdUsuario=${token.user}`).then((response) => setListaDeAtividades(response.data))
        }
    }

    useEffect(() => {
        ListarTurmas();
    })

    return (
        <ContainerScroll style={{ color: '#FFFBEB' }}>
            <ScrollView horizontal={true} style={{ flexDirection: "column" }}>
                <SafeAreaView style={{ alignItems: 'center', width: "100%" }}>
                    <SemiBoldText style={{ color: '#BE9AFF', fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 20 }}>Calendar</SemiBoldText>
                    <CalendarComponent
                        setDataSelecionada={setDataSelecionada}
                        dataSelecionada={dataSelecionada}
                    />
                    {
                        token.role == 'Professor' ?
                            <>
                                <TouchableOpacity onPress={() => setShowModalTurma(true)} style={{margin: 75}}>
                                    <AntDesign  name="pluscircleo" size={75} color="#BE9AFF" />
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <Title style={{ color: '#9D67FD', fontSize: 20 }}>Tarefas</Title>
                            </>
                    }

                    <FlatList showsHorizontalScrollIndicator={false} data={ListaDeAtividades} renderItem={({ item }) =>
                    (
                        <CardTask
                            taskName={item.titulo}
                            taskSubTitle={item.descricao}
                            check={item.status}
                            idAtividade={item.idAtividade}
                        />
                    )}

                    />
                    <TaskModal
                        visible={showModalTask}
                        setShowModalTask={setShowModalTask}
                        idTurma={idTurma}
                        setIdTurma={setIdTurma}
                        dataSelecionada={dataSelecionada}
                    />

                    <TurmaModal
                        visible={showModalTurma}
                        setShowModalTurma={setShowModalTurma}
                        setShowModalTask={setShowModalTask}
                        setIdTurma={setIdTurma}
                        idTurma={idTurma}
                    />



                    <LinkText onPress={() => (navigation.replace("Main"))} style={{ left: 0, marginTop: 25, color: '#BE9AFF' }}>Cancelar</LinkText>
                </SafeAreaView>
            </ScrollView>
        </ContainerScroll>
    )
}