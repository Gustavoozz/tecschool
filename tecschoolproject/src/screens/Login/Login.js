import { ContainerCream, ContainerPurple } from "../../components/Container/Style";
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginImage } from "../../components/Image/Image";
import { Text, View } from "react-native";
import { useState } from "react";
import api from "../../services/Service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("aluno@jonas.com"); 
    const [senha, setSenha] = useState("jonas123"); 

    async function Login() {
        await api.post('/Login', {
            email: email,
            senha: senha,
        }).then(async response => {
            console.log(response.data);
            await AsyncStorage.setItem("token", JSON.stringify(response.data));

            navigation.replace("Register");
        }
        ).catch(error => {

            console.log(error);
        });
    }


    return (
    <ContainerCream>
        <LoginImage 
        source={require('../../assets/LoginImage.png')}
        />
        <ContainerPurple>
            <Title>Login</Title>

            <Label>Registro do aluno ou Email</Label>
            <Input 
            placeholder="RA ou Email:"
            onChangeText={(txt) => setEmail(txt)}
            value={email}
            />

            <Label>Insira sua senha</Label>
            <Input 
            placeholder="Senha:"
            onChangeText={(txt) => setSenha(txt)}
            value={senha}
            />

            <LinkText onPress={() => navigation.replace("VerificarSenha")}>Esqueceu sua senha?</LinkText>

            <Button onPress={() => Login()}
            style={{ marginTop: 20 }}>
            <ButtonTitle>Login</ButtonTitle>
            </Button>

            {/* Lines */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
               <View style={{ borderTopWidth: 2, borderColor: '#BE9AFF' }}>
                 <Text>                                       </Text>   
            </View>
            <Text style={{ bottom: 10, fontFamily: 'Poppins_600SemiBold', color: '#BE9AFF' }}> OU </Text>
            <View style={{ borderTopWidth: 2, borderColor: '#BE9AFF' }}>
                 <Text>                                       </Text>   
            </View>
            </View>
            

            <Title style={{ fontSize: 13, textTransform: "none", marginTop: 0 }}>Não possui uma conta? <LinkText onPress={() => navigation.replace("Register")}>Crie uma agora?</LinkText></Title>
    </ContainerPurple>
</ContainerCream>
)
}



