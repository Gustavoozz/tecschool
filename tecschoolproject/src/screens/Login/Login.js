import { ContainerCream, ContainerPurple } from "../../components/Container/Style";
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginImage } from "../../components/Image/Image";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import api from "../../services/Service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from '@expo/vector-icons';

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("pedrohbedin@gmail.com");
    const [senha, setSenha] = useState("pedro123");
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    async function Login() {
        await api.post('/Login', {
            email: email,
            senha: senha,
        }).then(async response => {
            console.log(response.data);
            await AsyncStorage.setItem("token", JSON.stringify(response.data));

            navigation.replace("Main");
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

                <View style={{ width: "90%", height: 'auto', flexDirection: "row", borderColor: "#A06AFF", borderWidth: 2, borderRadius: 10, marginBottom: 150, alignItems: 'center'}}>
                    <Input
                        margin={"0px"}
                        placeholder="Senha"
                        placeholderTextColor="#49B3BA"
                        value={senha}
                        onChangeText={txt => setSenha(txt)}
                        secureTextEntry={!secureTextEntry}
                        style={{ borderColor: 'transparent', marginBottom: 0, borderSize: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}
                        width={"85%"}
                    />
                    <View style={{ width: 53, height: 55, backgroundColor: "#FBFBFB", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderRadius: 8, justifyContent: "center", paddingLeft: 10 }}>
                        <Feather
                            onPress={() => setSecureTextEntry(!secureTextEntry)}
                            color="#8C8A97"
                            size={24}
                            name={secureTextEntry ? 'eye' : 'eye-off'}
                            type="feather"
                        />
                    </View>
                </View>

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


                {/* <Title style={{ fontSize: 13, textTransform: "none", marginTop: 0 }}>Não possui uma conta? <LinkText onPress={() => navigation.replace("Register")}>Crie uma agora?</LinkText></Title> */}
            </ContainerPurple>
        </ContainerCream>
    )
}



