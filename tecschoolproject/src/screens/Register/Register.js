import { View } from "react-native"
import { Button } from "../../components/Button/Button"
import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { RegisterImage } from "../../components/Image/Image"
import { Input } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title"
import { useEffect, useState } from "react"
import api from "../../services/Service"
import { UserDecodeToken } from "../../utils/Auth"

export const Register = ({ navigation }) => {
    const [nome, setNome] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [user, setUser] = useState(""); 
    // const [turma, setTurma] = useState("4B0E8519-0989-4C5C-92D1-76A671DFBF8E"); 

    const tipoUsuario = "187E30D9-6ECD-4CAD-B26C-6B0993C8D8A1";
    const turma = "4B0E8519-0989-4C5C-92D1-76A671DFBF8E"

    async function Register() {
        const formData = new FormData();

        formData.append({
            nome: nome,
            senha: senha,
        })
        await api.put(`/Usuario/AtualizarPerfil?id=${user.id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
            ).then((response) => {
            console.log(response.data);  

            }).catch(error => {
            console.log(error);
            })
        }


        async function profileLoad() {
            const token = await UserDecodeToken();
            setUser(token.user)  
          }
          
          useEffect(() => {
            profileLoad();
          })
            
    return(
        <ContainerCream>
            <RegisterImage
            source={require("../../assets/RegisterImage.png")}
            />
            <ContainerPurple style={{ height: "80%"}}>
                <Title style={{ fontSize: 22, width: '100%', marginBottom: 30, marginTop: 40 }}>Atualize suas informações</Title>

                <Label>Insira seu nome</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Nome:"
                onChangeText={txt => setNome(txt)}
                value={nome}
                />


                {/* <Label>Insira seu email:</Label>
                <Input style={{ marginBottom: 20 }}
                placeholder="Email:"
                onChangeText={txt => setEmail(txt)}
                value={email}
                /> */}

                <Label>Insira sua senha:</Label>
                <Input style={{ marginBottom: 20 }} 
                placeholder="Senha:"
                onChangeText={txt => setSenha(txt)}
                value={senha}
                />  

                {/* <Label>Insira sua turma:</Label>
                <Input style={{ marginBottom: 20 }} 
                placeholder="Turma:"
                onChangeText={txt => setTurma(txt)}
                value={turma}
                />   */}
                

                <Button onPress={() => Register()} style={{ marginTop: 150 }}>
                    <ButtonTitle>Cadastrar</ButtonTitle>
                </Button>
                

                <LinkText style={{ left: 0, top: 30 }} onPress={() => navigation.replace("Login")}>Cancelar</LinkText>
            </ContainerPurple>
        </ContainerCream>
    )
} 