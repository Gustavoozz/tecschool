import { ContainerCream, ContainerPurple } from "../../components/Container/Style";
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title";
import { Label } from "../../components/Label/Label";
import { Input, Line } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { View } from "react-native";
import { LoginImage } from "../../components/Image/Image";

export const Login = ({ navigation }) => {
    return (
    <ContainerCream>
        <LoginImage 
        source={require('../../assets/LoginImage.png')}
        />
        <ContainerPurple>
            <Title>Login</Title>

            <Label>Student Record</Label>
            <Input 
            placeholder="RA:"
            />

            <Label>Enter Password</Label>
            <Input 
            placeholder="Password:"
            />

            <LinkText>Esqueceu sua senha?</LinkText>

            <Button style={{ marginTop: 20 }}>
            <ButtonTitle>Login</ButtonTitle>
            </Button>

            <Title style={{ fontSize: 13, textTransform: "none"}}>Não possui uma conta? <LinkText onPress={() => navigation.replace("Register")}>Crie uma agora?</LinkText></Title>
    </ContainerPurple>
</ContainerCream>
)
}



