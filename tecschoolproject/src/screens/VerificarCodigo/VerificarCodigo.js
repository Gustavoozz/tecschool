import { View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { LoginImage } from '../../components/Image/Image';
import { ButtonTitle, ContainerPurple, ContainerPurpleSecond, LinkText2, Title, Txt } from '../RedefinirSenha/Style';
import { useRef, useState } from 'react';
import { CodeInput, DigitInput } from '../../components/Container/Style';
import api from '../../services/Service';

export const VerificarCodigo = ({ navigation, route }) => {
    const [code, setCode] = useState("");
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  

    // Funções para a pular ou retornar as casas dos inputs:
    function focusNextInput(index) {
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus()
        }
    }


    const CodeValidate = async () => {
        await api.post(`/RecuperarSenha/EnivarCodigoRecuperacao?email=${route.params.emailRecuperacao}&code=${code}`)
            .then(() => {
                navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao });
            }).catch(error => {
                console.log(error);
            })

        
    }

    async function RecuperarCodigo() {
        await api.post(`/RecuperarSenha?email=${route.params.emailRecuperacao}`)
            .then(() => {
                alert("Código reenviado, consulte o seu e-mail!")
            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <ContainerPurple style={{ backgroundColor: '#C3A1FF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LoginImage
                source={require('../../assets/codigo.png')}
                style={{ width: '80%', height: 200, resizeMode: 'contain', marginTop: 50 }}
            />
            <ContainerPurpleSecond style={{ padding: 20, borderRadius: 10, alignItems: 'center' }}>
                <Title style={{ fontSize: 24, color: '#fff', marginBottom: 20 }}>VERIFIQUE SEU CÓDIGO</Title>
                <Txt style={{ color: '#fff', textAlign: 'center', marginBottom: 0 }}>
                    Digite o código de 4 dígitos enviado para:
                </Txt>

                <Txt style={{ color: '#7C31FF', textAlign: 'center', marginBottom: 20, fontWeight: 'bold', fontFamily: 'Poppins_600SemiBold' }}>
                {route.params.emailRecuperacao}
                </Txt>

                <View style={{ flexDirection: 'row', marginBottom: 40}}>
                    {
                 
                        [0, 1, 2, 3].map((index) => (
                            <CodeInput
                                key={index}
                                ref={inputs[index]}

                                placeholder="0"
                                maxLength={1}
                                keyboardType="numeric"

                                onChangeText={(txt) => {
                                    if (txt == "") {
                                        focusPrevInput(index)

                                    } else {
                                        const codigoInformado = [...code]
                                        codigoInformado[index] = txt
                                        setCode(codigoInformado.join(''))

                                        focusNextInput(index)
                                    }
                                }}
                            />
                        ))
                            }
                </View>


                
                <Button
                     onPress={() => CodeValidate()}
                    style={{ backgroundColor: '#4B0082', paddingVertical: 0, paddingHorizontal: 20, borderRadius: 5 }}
                >
                    <ButtonTitle style={{ color: '#fff', width: '100%' }}>CONFIRMAR</ButtonTitle>
                </Button>

                <View style={{ marginTop: 20 }}>
                    <LinkText2 
                        onPress={() => RecuperarCodigo()}
                        style={{ color: '#fff', textDecorationLine: 'underline', textAlign: 'center' }}
                    >
                        Reenviar código
                    </LinkText2>

                </View>
            </ContainerPurpleSecond>
        </ContainerPurple>
    );
}