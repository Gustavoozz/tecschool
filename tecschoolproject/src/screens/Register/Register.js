import { View } from "react-native"
import { Button } from "../../components/Button/Button"
import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { RegisterImage } from "../../components/Image/Image"
import { Input } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title"

export const Register = ({ navigation }) => {
    return(
        <ContainerCream>
            <RegisterImage
            source={require("../../assets/RegisterImage.png")}
            />
            <ContainerPurple style={{ height: "80%"}}>
                <Title style={{ fontSize: 25 }}>Realize seu cadastro</Title>

                <Label>Insira seu nome</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Nome:"
                />

                <Label>Insira sua data de nascimento:</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Data de nascimento:"
                />

                <Label>Insira seu email:</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Email:"
                />

                <Label>Insira sua senha:</Label>
                <Input style={{ marginBottom: 20 }} 
                placeholder="Senha:"
                />  
                

                <Button style={{ marginTop: 10 }}>
                    <ButtonTitle>Cadastrar</ButtonTitle>
                </Button>
                

                <LinkText style={{ left: 0, top: 30 }} onPress={() => navigation.replace("Login")}>Cancelar</LinkText>
            </ContainerPurple>
        </ContainerCream>
    )
}