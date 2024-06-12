<<<<<<< HEAD
=======
import { View } from "react-native"
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82
import { Button } from "../../components/Button/Button"
import { ContainerCream, ContainerPurple } from "../../components/Container/Style"
import { RegisterImage } from "../../components/Image/Image"
import { Input } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { ButtonTitle, LinkText, Title } from "../../components/Title/Title"
<<<<<<< HEAD

export const Register = ({ navigation }) => {
=======
import { useState } from "react"
import api from "../../services/Service"

export const Register = ({ navigation }) => {
    const [nome, setNome] = useState("Pedro"); 
    const [email, setEmail] = useState("pedro@gmail.com"); 
    const [senha, setSenha] = useState("pedro124"); 
    // const [turma, setTurma] = useState("4B0E8519-0989-4C5C-92D1-76A671DFBF8E"); 

    const tipoUsuario = "187E30D9-6ECD-4CAD-B26C-6B0993C8D8A1";
    const turma = "4B0E8519-0989-4C5C-92D1-76A671DFBF8E"

    async function Register() {
        await api.post("/Aluno", {
            nome: nome,
            email: email,
            senha: senha,
            idTipoUsuario: tipoUsuario,
            idTurma: turma,
            arquivo: "",
            foto: ""
            }).then(() => {
            navigation.replace("Login");

            }).catch(error => {
            console.log(error);
            })
        }
            
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82
    return(
        <ContainerCream>
            <RegisterImage
            source={require("../../assets/RegisterImage.png")}
            />
            <ContainerPurple style={{ height: "80%"}}>
                <Title style={{ fontSize: 25 }}>Realize seu cadastro</Title>

<<<<<<< HEAD
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
=======
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
                

                <Button onPress={() => Register()} style={{ marginTop: 10 }}>
                    <ButtonTitle>Cadastrar</ButtonTitle>
                </Button>
                
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82

                <LinkText style={{ left: 0, top: 30 }} onPress={() => navigation.replace("Login")}>Cancelar</LinkText>
            </ContainerPurple>
        </ContainerCream>
    )
<<<<<<< HEAD
}
=======
} 
>>>>>>> e2231685f69145967e4a61eea09e6dfb56ceba82
