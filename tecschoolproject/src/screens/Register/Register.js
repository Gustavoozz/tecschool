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

                <Label>Enter name</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Name:"
                />

                <Label>Enter your birth date:</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Date of birth:"
                />

                <Label>Enter your email:</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Email:"
                />

                <Label>Enter your password:</Label>
                <Input style={{ marginBottom: 20 }} 
                placeholder="Password:"
                />  

                <Button style={{ marginTop: 10 }}>
                    <ButtonTitle>Cadastrar</ButtonTitle>
                </Button>

                <LinkText style={{ left: 0, top: 30 }} onPress={() => navigation.replace("Login")}>Cancelar</LinkText>
            </ContainerPurple>
        </ContainerCream>
    )
}