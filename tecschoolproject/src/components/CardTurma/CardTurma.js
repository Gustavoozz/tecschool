import { useState } from "react"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { CardContainer, CheckButton, IconContainer, TextContainer } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const CardTurma = ({ taskName, taskSubTitle, onPress }) => {
    const [check, setCheck] = useState(false);

    return (
        <TouchableOpacity onPress={onPress}>
            <CardContainer onPress={onPress} style={{ height: 60, width: '90%' }}>

                <TextContainer style={{ width: '90%', alignItems: 'center' }}>
                    <SemiBoldText style={{ textAlign: 'center' }}>{taskName}</SemiBoldText>
                    <SubTitle>{taskSubTitle}</SubTitle>
                </TextContainer>
            </CardContainer>
        </TouchableOpacity>
    )
}