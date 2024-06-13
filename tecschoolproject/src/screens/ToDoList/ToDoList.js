import { useEffect, useState } from "react";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { ButtonTitle, LinkText, SemiBoldText, Title } from "../../components/Title/Title"
import { CardTask } from "../../components/CardTask/CardTask";
import { Button } from "../../components/Button/Button";
import { UserDecodeToken } from "../../utils/Auth";
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";

export const ToDoList = ({ navigation }) => {
    const [dataSelecionada, setDataSelecionada] = useState('');
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
        <ContainerScroll contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <SemiBoldText style={{ color: '#BE9AFF', fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 20}}>Calendar</SemiBoldText>
            <CalendarComponent 
            setDataSelecionada={setDataSelecionada}
            dataSelecionada={dataSelecionada}
            />
            {
                tipoUsuario === 'Professor' ?
                <View style={{ left: 140, top: 50}}>
                    <AntDesign name="pluscircle" size={24} color='#BE9AFF' />
                </View>
                :
                null  
                
            }
            

            <Title style={{ color: '#9D67FD', fontSize: 20 }}>Tarefas</Title>
            <CardTask 
            taskName="Tarefa um"
            taskSubTitle="Conteúdo da tarefa"
            />

            <CardTask 
            taskName="Tarefa dois"
            taskSubTitle="Conteúdo da tarefa"
            />

            <CardTask 
            taskName="Tarefa três"
            taskSubTitle="Conteúdo da tarefa"
            />


            <Button style={{ backgroundColor: '#BE9AFF', marginTop: 20 }}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <LinkText onPress={() => (navigation.replace("Main"))}style={{ left: 0, marginTop: 25, color: '#BE9AFF' }}>Cancelar</LinkText>
        </ContainerScroll>
    )
}