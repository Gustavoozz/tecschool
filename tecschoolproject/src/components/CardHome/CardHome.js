import { SemiBoldText, SubTitle } from "../Title/Title";
import { ArrowContainer, CardContainer, IconContainer, TextContainer } from "./Style"
import { MaterialIcons } from '@expo/vector-icons';


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

            <ArrowContainer>
                <MaterialIcons name="arrow-right" size={45} color="#BE9AFF" />
            </ArrowContainer>
            
            
        </CardContainer>
    )
}