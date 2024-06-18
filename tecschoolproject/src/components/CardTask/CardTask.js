import { useEffect, useState } from "react"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { CardContainer, CheckButton, IconContainer, TextContainer } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { Text } from "react-native";
import api from "../../services/Service";

export const CardTask = ({ taskName, taskSubTitle, check, idAtividade }) => {

    const [checked, setChecked] = useState()
    async function AtualizarAtividade(status) {
        setChecked(status)
        if (status != null) {
            await api.put(`/Atividade/Atualizar?Id=${idAtividade}`, {
                status: status
            }).then((response) => console.log(response.data)).catch((error) => console.log(error))
        }
    }

    useEffect(() => {
        if (check != null) {
            setChecked(check)
        }
    }, [check])

    return (
        <CardContainer>
            <IconContainer>
                {
                    checked === true ?
                        <CheckButton onPress={() => AtualizarAtividade(false)}>
                            <Entypo name="check" size={35} color="#C3A1FF" />
                        </CheckButton>
                        :
                        <CheckButton onPress={() => AtualizarAtividade(true)}>

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