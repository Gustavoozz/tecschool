import { useState } from "react";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { Container } from "../../components/Container/Style"
import { SemiBoldText, Title } from "../../components/Title/Title"

export const ToDoList = () => {
    const [dataSelecionada, setDataSelecionada] = useState('');

    return(
        <Container>
            <SemiBoldText style={{ color: '#BE9AFF', fontSize: 25, textAlign: 'center', bottom: 60}}>Calendar</SemiBoldText>
            <CalendarComponent 
            setDataSelecionada={setDataSelecionada}
            dataSelecionada={dataSelecionada}
            />
        </Container>
    )
}