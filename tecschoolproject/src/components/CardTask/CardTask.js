import { SemiBoldText, SubTitle } from "../Title/Title"
import { CardContainer, CheckButton, IconContainer, TextContainer } from "./Style"

export const CardTask = ({ taskName, taskSubTitle }) => {
    return(
        <CardContainer>
            <IconContainer>
                <CheckButton />
            </IconContainer>

            <TextContainer>
                <SemiBoldText>{taskName}</SemiBoldText>
                <SubTitle>{taskSubTitle}</SubTitle>
            </TextContainer>
        </CardContainer>
    )
}