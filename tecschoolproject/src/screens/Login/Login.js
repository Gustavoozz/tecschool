import { ContainerCream, ContainerPurple } from "../../components/Container/Style";
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginImage } from "../../components/Image/Image";
import { Text, View } from "react-native";

export const Login = ({ navigation }) => {
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
            />

            <Label>Insira sua senha</Label>
            <Input 
            placeholder="Senha:"
            />

            <LinkText>Esqueceu sua senha?</LinkText>

            <Button onPress={() => navigation.replace("Main")}
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



