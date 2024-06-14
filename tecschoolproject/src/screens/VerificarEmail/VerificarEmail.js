import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { LoginImage } from '../../components/Image/Image';
import { Input } from '../../components/Input/Input';
import { ButtonTitle, ContainerPurple, LinkText2, Title, Txt } from '../RedefinirSenha/Style';
import api from '../../services/Service';

export const VerificarEmail = ({ navigation }) => {
    const [email, setEmail] = useState("gustavonascimento928@gmail.com");

    async function SendEmail() {
        await api.post(`/RecuperarSenha?email=${email}`).then(() => {
    
            navigation.replace("VerificarCodigo", { emailRecuperacao: email })
        }).catch(error => {
            console.log(error);

         
        })
    }

    return (
        <ContainerPurple style={{ backgroundColor: '#A164E8', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LoginImage
                source={require('../../assets/verificar.png')}
                style={{ width: 220, height: 180, marginTop: 70 }}
            />
            <ContainerPurple style={{ padding: 20, borderRadius: 10, alignItems: 'center' }}>
                <Title style={{ fontSize: 24, color: '#fff', marginBottom: 10 }}>VERIFIQUE SEU EMAIL</Title>
                <Txt style={{ color: '#fff', textAlign: 'center', marginBottom: 30, fontFamily: "Poppins_300Light" }}>
                    Insira o endereço de email para enviarmos o código de recuperação de senha.
                </Txt>

                <Input 
                    placeholder="Enter email:"
                    style={{ backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10, marginBottom: 20, width: '100%' }}
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}
                />

                <Button 
                    onPress={() => navigation.replace("VerificarCodigo")}
                    style={{ backgroundColor: '#4B0082', paddingVertical: 0, paddingHorizontal: 20, borderRadius: 5, width: '100%' }} >

                    <ButtonTitle onPress={() => SendEmail()} style={{ color: '#fff' }}>Confirmar</ButtonTitle>
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
