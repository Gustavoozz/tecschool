import { useState } from "react"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { CardContainer, CheckButton, IconContainer, TextContainer } from "./Style"
import { Entypo } from '@expo/vector-icons';
import { Text } from "react-native";

export const CardTask = ({ taskName, taskSubTitle }) => {
    const [check, setCheck] = useState(false);

    return(
        <CardContainer>
            <IconContainer>
                {
                    check === true ?
                    <CheckButton onPress={() => setCheck(false)}>
                        <Entypo name="check" size={35} color="#C3A1FF" />
                    </CheckButton>
                    :
                    <CheckButton onPress={() => setCheck(true)}>
                   
                    </CheckButton>
                }
                
            </IconContainer>

            <TextContainer style={{ width: '100%'}}>
                <SemiBoldText>{taskName}</SemiBoldText>
                <SubTitle>{taskSubTitle}</SubTitle>
            </TextContainer>
        </CardContainer>
    )
}