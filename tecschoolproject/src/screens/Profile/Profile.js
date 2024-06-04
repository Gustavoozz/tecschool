import { Text } from "react-native"
import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { ProfileImage } from "./Style"
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Title"
import { Input } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { Button } from "../../components/Button/Button"

export const Profile = () => {
    return(
        <ContainerCream>
            <ProfileImage source={require("../../assets/default-user.png")}/>
            <Title style={{ textTransform: 'none', marginBottom: 0, marginTop: 0, color: '#A06AFF', fontSize: 25}}>Nome do aluno</Title>
            <SubTitle style={{ color: '#A06AFF', fontSize: 15, fontFamily: 'Poppins_300Light', textAlign: 'center', marginBottom: 40 }}>Turma do aluno</SubTitle>

            <ContainerPurple style={{ height: '57%'}}>
            <Label style={{ marginTop: 40}}>Name</Label>
            <Input 
            placeholder="Name..."
            />

            <Label>RA</Label>
            <Input 
            placeholder="RA..."
            />

            <Label>Turma</Label>
            <Input 
            placeholder="Turma..."
            />

            <Button style={{ width: '70%', height: 52}}>
                <ButtonTitle style={{ fontSize: 12 }}>Editar</ButtonTitle>
            </Button>

            </ContainerPurple>
        </ContainerCream>
    )
}