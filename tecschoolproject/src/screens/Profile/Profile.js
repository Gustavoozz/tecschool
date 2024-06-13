import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { ButtonCamera, LogoutButton, ProfileImage } from "./Style"
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Title"
import { Input, InputEdit } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { Button } from "../../components/Button/Button"
import { useEffect, useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserDecodeToken, UserLogout } from "../../utils/Auth"
import CameraComponenet from "../../components/CameraComponent/CameraComponent"
import api from "../../services/Service"

export const Profile = ({ navigation }) => {
    const [editar, setEditar] = useState(false); 
    const [photo, setPhoto] = useState(null); 
    const [showCamera, setShowCamera] = useState(false);
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [tipoUsuario, setTipoUsuario] = useState("")
    const [idUsuario, setIdUsuario] = useState("");

    async function profileLoad() {
        const token = await UserDecodeToken();

        if (token !== null) {
            setNome(token.name);
            setEmail(token.email);
            setIdUsuario(token.user);
            setTipoUsuario(token.role)

            await UserLoad(token);
        }
      }   
      
      
      async function UserLoad(token) {

        if (token.role === 'Aluno') {
        await api.get(`/Aluno/BuscarPorId?id=${token.user}`)
        .then(response => {
            
            setUser(response.data)
        }).catch(error => {
            console.log(error);
        })
        } else {
        await api.get(`/Professor/BuscaPorId?id=${token.user}`)
        .then(response => {
          
           
            setUser(response.data)
        })
        .catch(error => {
            console.log(error);
        })
        }
    }


    async function ChangeProfilePhoto() {
        const formData = new FormData();
        formData.append("Arquivo", {
            uri: photo,
            name: `image.${photo.split(".").pop()}`,
            type: `image/${photo.split(".").pop()}`,
        })

        await api.put(`/Usuario/AlterarFotoPerfil?id=${user.idUsuario}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .catch(error => {
            console.log(error);
        })
    }
      
      useEffect(() => {
        profileLoad();
      }, [user])

      
      useEffect(() => {
        if (photo != null) {
            ChangeProfilePhoto();
        }
    }, [photo])

  


   
    return user.usuario ? (
        <ContainerCream>
            <LogoutButton onPress={() => UserLogout() && navigation.replace("Login")}>
             <MaterialCommunityIcons name="logout" size={34} color="#A06AFF" />      
            </LogoutButton>
                 
            
            <View>
            <ProfileImage source={{ uri: user.usuario.foto }}/>
            
            <ButtonCamera onPress={() => setShowCamera(true)}>
            <AntDesign name="camera" size={35} color="#A06AFF" />
            </ButtonCamera>
            </View>
            
           
            <Title style={{ textTransform: 'none', marginBottom: 0, marginTop: 0, color: '#A06AFF', fontSize: 25}}>{nome}</Title>
            <SubTitle style={{ color: '#A06AFF', fontSize: 15, fontFamily: 'Poppins_300Light', textAlign: 'center', marginBottom: 40 }}>{email}</SubTitle>

            <ContainerPurple style={{ height: '57%'}}>
            <Label style={{ marginTop: 40}}>Name</Label>
            {
                editar != false ?
                <InputEdit 
                placeholder="Nome..."
                onChangeText={(txt) => setNome(txt)}
                value={nome}
                />
                :
                <Input 
                placeholder="Nome..."
                value={nome}
                />
            }
            
            {
                tipoUsuario == 'Aluno' ?
                <>
                 <Label>RA</Label>
                <Input 
                placeholder="RA..."
                value={user.ra}
                />
                </>
                :
                <>
                <Label>Materia</Label>
                <Input
                placeholder="Materia..."
                value={user.materia.materia}
                />
                </>
            }
               
    
           
            {
                tipoUsuario == 'Aluno' ?
                <>
                <Label>Turma</Label> 
                <Input
                placeholder="Turma..."
                value={user.turma.turma}
                />
            </>
            :
            null
            }
           
           
           
            {
                editar != false ?
            <Button onPress={() => setEditar(false)} style={{ width: '70%', height: 52, color: "#E6C8FF" }}>
                <ButtonTitle style={{ fontSize: 12 }}>Salvar informações</ButtonTitle>
            </Button>
            :
            <Button onPress={() => setEditar(true)} style={{ width: '70%', height: 52}}>
                <ButtonTitle style={{ fontSize: 12 }}>Editar</ButtonTitle>
            </Button>
            }

             <CameraComponenet
                        getMediaLibrary={true}
                        visible={showCamera}
                        setShowCamera={setShowCamera}
                        setPhotoUpload={setPhoto}
                    />

            

            </ContainerPurple>
        </ContainerCream>
    )
    :
    (
        <>
        </>
    )
}