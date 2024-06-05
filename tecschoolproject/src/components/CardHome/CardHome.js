import { SemiBoldText, SubTitle } from "../Title/Title";
import { CardContainer, IconContainer, TextContainer } from "./Style"


export const CardHome = ({ icon, taskTitle, taskSubTitle, navigation }) => {
    return(
        <CardContainer onPress={navigation}>
            <IconContainer>
           {icon}
            </IconContainer>

            <TextContainer>
               <SemiBoldText>{taskTitle}</SemiBoldText>
               <SubTitle>{taskSubTitle}</SubTitle>
            </TextContainer>

            
        </CardContainer>
    )
}