import { View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { LoginImage } from '../../components/Image/Image';
import { ButtonTitle, ContainerPurple, ContainerPurpleSecond, LinkText2, Title, Txt } from '../RedefinirSenha/Style';
import { useState } from 'react';
import { DigitInput } from '../../components/Container/Style';

export const VerificarCodigo = ({ navigation }) => {
    const [code, setCode] = useState(['', '', '', '']);

    const handleDigitChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <ContainerPurple style={{ backgroundColor: '#C3A1FF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LoginImage
                source={require('../../assets/codigo.png')}
                style={{ width: '80%', height: 200, resizeMode: 'contain' }}
            />
            <ContainerPurpleSecond style={{ padding: 20, borderRadius: 10, alignItems: 'center' }}>
                <Title style={{ fontSize: 24, color: '#fff', marginBottom: 20 }}>VERIFIQUE SEU CÓDIGO</Title>
                <Txt style={{ color: '#fff', textAlign: 'center', marginBottom: 0, fontFamily: 'Poppins_300Light' }}>
                    Digite o código de 4 dígitos enviado para:
                </Txt>
                <Txt style={{ color: '#7C31FF', textAlign: 'center', marginBottom: 20, fontWeight: 'bold', fontFamily: 'Poppins_600SemiBold' }}>
                    username@email.com
                </Txt>
                <DigitInput value={code} onChangeText={handleDigitChange} />
                <Button
                    onPress={() => navigation.replace("RedefinirSuaSenha")}
                    style={{ backgroundColor: '#4B0082', paddingVertical: 0, paddingHorizontal: 20, borderRadius: 5 }}
                >
                    <ButtonTitle onPress={() => navigation.replace("RedefinirSenha")} style={{ color: '#fff', width: '100%' }}>CONFIRMAR</ButtonTitle>
                </Button>
                <View style={{ marginTop: 20 }}>
                    <LinkText2 
                        onPress={() => navigation.replace("ResendCode")}
                        style={{ color: '#fff', textDecorationLine: 'underline', textAlign: 'center' }}
                    >
                        Reenviar código
                    </LinkText2>
                </View>
            </ContainerPurpleSecond>
        </ContainerPurple>
    );
}