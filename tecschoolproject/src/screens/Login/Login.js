import { Text } from "react-native";
import { ContainerLoginOne, ContainerLoginTwo } from "../../components/Container/Style";
import { Title } from "../../components/Title/Title";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";

export const Login = () => {
    return (
    <ContainerLoginOne>
        <ContainerLoginTwo>
            <Title>Login</Title>

            <Label>Student Record</Label>
            <Input></Input>
        </ContainerLoginTwo>
    </ContainerLoginOne>
)
}



