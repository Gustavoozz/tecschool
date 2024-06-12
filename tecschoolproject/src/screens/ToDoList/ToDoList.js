import { useState } from "react";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { ButtonTitle, LinkText, SemiBoldText, Title } from "../../components/Title/Title"
import { CardTask } from "../../components/CardTask/CardTask";
import { Button } from "../../components/Button/Button";

export const ToDoList = ({ navigation }) => {
    const [dataSelecionada, setDataSelecionada] = useState('');

    return(
        <ContainerScroll contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <SemiBoldText style={{ color: '#BE9AFF', fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 20}}>Calendar</SemiBoldText>
            <CalendarComponent 
            setDataSelecionada={setDataSelecionada}
            dataSelecionada={dataSelecionada}
            />

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