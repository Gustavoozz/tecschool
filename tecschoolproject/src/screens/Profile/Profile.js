import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { ButtonCamera, CameraIcon, ProfileImage } from "./Style"
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Title"
import { Input, InputEdit } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { Button } from "../../components/Button/Button"
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native"

export const Profile = () => {
    const [editar, setEditar] = useState(false); 
    const [nome, setNome] = useState("")

    return(
        <ContainerCream>
            <View>
            <ProfileImage source={require("../../assets/default-user.png")}/>
            <ButtonCamera>
            <AntDesign name="camera" size={35} color="#A06AFF" />
            </ButtonCamera>
            </View>
           
           

            <Title style={{ textTransform: 'none', marginBottom: 0, marginTop: 0, color: '#A06AFF', fontSize: 25}}>Nome do aluno</Title>
            <SubTitle style={{ color: '#A06AFF', fontSize: 15, fontFamily: 'Poppins_300Light', textAlign: 'center', marginBottom: 40 }}>Turma do aluno</SubTitle>

            <ContainerPurple style={{ height: '57%'}}>
            <Label style={{ marginTop: 40}}>Name</Label>
            {
                editar != false ?
                <InputEdit 
                placeholder="Name..."
                onChangeText={(txt) => setNome(txt)}
                value={nome}
                />
                :
                <Input 
            placeholder="Name..."
            value={nome}
            />
            }
            

            <Label>RA</Label>
            {
                editar != false ?
                <InputEdit 
                placeholder="RA..."
                />
                :
                <Input 
            placeholder="RA..."
            />
            }
           

            <Label>Turma</Label>
            {
                editar != false ?
                <InputEdit 
                placeholder="Turma..."
                />
                :
                <Input 
                placeholder="Turma..."
            />
            }
           
            {
                editar != false ?
            <Button onPress={() => setEditar(false)} style={{ width: '70%', height: 52, color: "#E6C8FF" }}>
                <ButtonTitle style={{ fontSize: 12 }}>Salvar</ButtonTitle>
            </Button>
            :
            <Button onPress={() => setEditar(true)} style={{ width: '70%', height: 52}}>
                <ButtonTitle style={{ fontSize: 12 }}>Editar</ButtonTitle>
            </Button>
            }


            

            </ContainerPurple>
        </ContainerCream>
    )
}