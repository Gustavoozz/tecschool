import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { LoginImage } from "../../components/Image/Image";
import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";
import { ButtonTitle, ContainerPurple, LinkText2, Title, Txt } from "./Style";
import api from "../../services/Service";


export const RedefinirSuaSenha = ({ navigation, route }) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    async function ChangePassword() {
                await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
                    senhaNova: password
                }).then(() => {
                    navigation.replace("Login");
                }).catch(error => {
                    console.log(error);
                })
    }

    
    return (
        <ContainerPurple style={{ backgroundColor: '#A164E8', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LoginImage 
            style={{ width: 150, height: 170, marginTop: 60}}
            source={require("../../assets/redefinir.png")} />
           
            <ContainerPurple style={{ padding: 20, borderRadius: 10, alignItems: 'center' }}>
                <Title style={{ fontSize: 24, color: '#fff', marginBottom: 20 }}>REDEFINA SUA SENHA</Title>
                <Txt style={{ color: '#fff', textAlign: 'center', marginBottom: 20 }}>
                    Coloque sua nova senha e a confirme para redefinir sua senha.
                </Txt>

                <Label>Digite uma nova senha</Label>
                <Input 
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                    placeholder="Enter email:"
                    style={{ backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10, marginBottom: 20, width: '100%' }}
                />
                
                <Label>Confirme sua nova senha</Label>
                <Input 
                    value={confirmPassword}
                    onChangeText={(txt) => setConfirmPassword(txt)}
                    placeholder="Enter Senha:"
                    style={{ backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10, marginBottom: 20, width: '100%' }}
                />

                <Button
                    onPress={() => ChangePassword()}
                    style={{ backgroundColor: '#4B0082', paddingVertical: 0, paddingHorizontal: 20, borderRadius: 5 }}
                >
                    <ButtonTitle style={{ color: '#fff' }}>Confirmar</ButtonTitle>
                </Button>
                <LinkText2 
                    onPress={() => navigation.replace("Login")}
                    style={{ color: '#fff', marginTop: 20, textDecorationLine: 'underline' }}
                >
                    Cancelar
                </LinkText2>
            </ContainerPurple>
        </ContainerPurple>
    );
}