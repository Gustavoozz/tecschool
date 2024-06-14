import { Text } from "react-native"
import { SemiBoldText, SubTitle } from "../Title/Title"
import { BoxUser, ContainerHeader, ImageUser, InfoContainer, PhotoContainer } from "./Style"
import React, { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";
import { useFocusEffect } from "@react-navigation/native";

export const Header = () => {
    const [nome, setNome] = useState();
    const [role, setRole] = useState();
    const [user, setUser] = useState();

    async function profileLoad() {
        const token = await UserDecodeToken();
        setNome(token.name);
        setRole(token.role)
        
        token.role == 'Aluno' ? 
        await api.get(`/Aluno/BuscarPorId?id=${token.user}`).then((response) => setUser(response.data)).catch((error) => console.log(error))
        :
        await api.get(`/Professor/BuscaPorId?id=${token.user}`).then((response) => setUser(response.data)).catch((error) => console.log(error))
    }

    useFocusEffect(
        React.useCallback(() => {
          profileLoad();
        }, [])
      )
    

    return user ? (
        <ContainerHeader>
            <BoxUser>
                <ImageUser source={{ uri: user.usuario.foto }} />
                <InfoContainer>
                    <SemiBoldText style={{ color: 'white', fontSize: 20, width: '100%' }}>{nome}</SemiBoldText>
                    <SubTitle style={{ color: "white", fontSize: 13 }}>{role}</SubTitle>
                </InfoContainer>
            </BoxUser>
        </ContainerHeader>
    ) : (<>
    </>)
}