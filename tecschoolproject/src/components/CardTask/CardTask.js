import { useEffect, useState } from "react"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { CardContainer, CheckButton, IconContainer, TextContainer } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { Text } from "react-native";
import api from "../../services/Service";

export const CardTask = ({ taskName, taskSubTitle, idAtividade }) => {

    const [check, setCheck] = useState(false);

    async function atualizarAtividade(status) {
        await api.put(`/Atividade/Atualizar?Id=${idAtividade}`, {
            status: status
        })
    }


    return (
        <CardContainer>
            <IconContainer>
                {
                    check === true ?
                        <CheckButton onPress={() => { setCheck(false), atualizarAtividade(false) }}>
                            <Entypo name="check" size={35} color="#C3A1FF" />
                        </CheckButton>
                        :
                        <CheckButton onPress={() => { setCheck(true), atualizarAtividade(true) }}>

                        </CheckButton>
                }

            </IconContainer>

            <TextContainer style={{ width: '100%' }}>
                <SemiBoldText>{taskName}</SemiBoldText>
                <SubTitle>{taskSubTitle}</SubTitle>
            </TextContainer>
        </CardContainer>
    )
}