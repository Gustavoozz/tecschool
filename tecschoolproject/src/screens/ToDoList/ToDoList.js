import { useEffect, useState } from "react";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { ButtonTitle, LinkText, SemiBoldText, Title } from "../../components/Title/Title"
import { CardTask } from "../../components/CardTask/CardTask";
import { Button } from "../../components/Button/Button";
import { UserDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";
import { FlatList, SafeAreaView, ScrollView } from "react-native";

export const ToDoList = ({ navigation }) => {
    const [dataSelecionada, setDataSelecionada] = useState('');
    const [token, setToken] = useState('');
    const [ListaDeAtividades, setListaDeAtividades] = useState('');

    async function profileLoad() {
        const token = await UserDecodeToken();

        if (token !== null) {

            setToken(token);
        }
    }

    useEffect(() => {
        profileLoad();
    }, [])

    useEffect(() => {
        BuscarAtividades();
    }, [dataSelecionada])

    console.log(ListaDeAtividades)

    async function BuscarAtividades() {
        if (dataSelecionada != null && token.user != null) {
            await api.get(`/Atividade/BuscarPorData?data=${dataSelecionada}&IdUsuario=${token.user}`).then((response) => setListaDeAtividades(response.data))
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ alignItems: 'center' }}>
                <SemiBoldText style={{ color: '#BE9AFF', fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 20 }}>Calendar</SemiBoldText>
                <CalendarComponent
                    setDataSelecionada={setDataSelecionada}
                    dataSelecionada={dataSelecionada}
                />

                <Title style={{ color: '#9D67FD', fontSize: 20 }}>Tarefas</Title>

                <FlatList showsHorizontalScrollIndicator={false} data={ListaDeAtividades} renderItem={({ item }) =>
                (
                    <CardTask
                        idAtividade={item.idAtividade}
                        taskName={item.titulo}
                        taskSubTitle={item.descricao}
                    />
                )}
                />



                <LinkText onPress={() => (navigation.replace("Main"))} style={{ left: 0, marginTop: 25, color: '#BE9AFF' }}>Cancelar</LinkText>
            </SafeAreaView>
        </ScrollView>
    )
}