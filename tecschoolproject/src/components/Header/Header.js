import { Text } from "react-native"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { BoxUser, ContainerHeader, ImageUser, InfoContainer, PhotoContainer } from "./Style"

export const Header = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <ImageUser source={require("../../assets/default-user.png")}/>
                <InfoContainer>
                <SemiBoldText style={{ color: 'white', fontSize: 20 }}>User</SemiBoldText>
                <SubTitle style={{ color: "white", fontSize: 13 }}>Turma</SubTitle>
                </InfoContainer>
            </BoxUser>
        </ContainerHeader>
    )
}