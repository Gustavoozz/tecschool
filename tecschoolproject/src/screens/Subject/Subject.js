import { CardSubject } from "../../components/CardSubject/CardSubject";
import { ContainerHome, ViewRow } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { LinkText, Title } from "../../components/Title/Title"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import api from "../../services/Service";
import { useState } from "react";

export const Subject = ({ navigation }) => {
    const [materia, setMateria] = useState("")

    async function SubjectList() {
        await api.get("/Materia/Listar")
        .then(response => {
            setMateria(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    return(
        <ContainerHome>
            <Header />

            <Title style={{ marginTop: 0, marginBottom: 10, color: '#9D67FD', fontSize: 30 }}>Matérias</Title>

            <ViewRow>
            <CardSubject 
            icon={<FontAwesome name="book" size={90} color="black" />}
            subjectName="Portuguese"
            teacherName="Professor Um"
           />

            <CardSubject 
            icon={<MaterialCommunityIcons name="math-compass" size={90} color="black" />}
            subjectName="Math"
            teacherName="Professor Dois"
           />    
            </ViewRow>

            <ViewRow>
            <CardSubject 
            icon={<Entypo name="globe" size={90} color="black" />}
            subjectName="Geography"
            teacherName="Professor Tres"
           />


            <CardSubject 
            icon={<Fontisto name="atom" size={90} color="black" />}
            subjectName="Science"
            teacherName="Professor Quatro"
           />
            </ViewRow>

            <LinkText onPress={() => (navigation.replace("Main"))} style={{ color: "#A06AFF", left: 0, marginTop: 10}}>Retornar</LinkText>
           


        </ContainerHome>
        
    )
}