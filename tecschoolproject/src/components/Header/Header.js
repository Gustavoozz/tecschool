import { Text } from "react-native"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { BoxUser, ContainerHeader, ImageUser, InfoContainer, PhotoContainer } from "./Style"
import { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";

export const Header = () => {
    const [nome, setNome] = useState();
    const [role, setRole] = useState();
 
    async function profileLoad() {
        const token = await UserDecodeToken();
        setNome(token.name);
        setRole(token.role)
      }
      
      useEffect(() => {
        profileLoad();
      })

    return(
        <ContainerHeader>
            <BoxUser>
                <ImageUser source={require("../../assets/default-user.png")}/>
                <InfoContainer>
                <SemiBoldText style={{ color: 'white', fontSize: 20 }}>{nome}</SemiBoldText>
                <SubTitle style={{ color: "white", fontSize: 13 }}>{role}</SubTitle>
                </InfoContainer>
            </BoxUser>
        </ContainerHeader>
    )
}