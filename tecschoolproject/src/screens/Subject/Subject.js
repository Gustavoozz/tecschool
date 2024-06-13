import { CardSubject } from "../../components/CardSubject/CardSubject";
import { ContainerHome, ViewRow } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { LinkText, Title } from "../../components/Title/Title"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import api from "../../services/Service";
import { useEffect, useState } from "react";
import { ListComponent } from "../../components/List/List";
import { View } from "react-native";

export const Subject = ({ navigation }) => {
    const [materia, setMateria] = useState("")
    const [materiaId, setMateriaId] = useState(null); 

    // async function SubjectList() {
    //     await api.get("/Materia/Listar")
    //     .then(response => {
    //         console.log(response.data);
    //         setMateria(response.data)
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    // useEffect(() => {
    //     SubjectList();
    // }, [])

    return(
        <ContainerHome>
            <Header />

            <Title style={{ marginTop: 0, marginBottom: 10, color: '#9D67FD', fontSize: 30 }}>Matérias</Title>

            {/* <View style={{ flexDirection: 'row'}}>
            <ListComponent 
            data={materia}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardSubject
                materia={item}
                setMateriaId={setMateriaId}
              />
            )}
            />
             </View> */}

            <ViewRow>
            <CardSubject 
            icon={<FontAwesome name="book" size={90} color="black" />}
            subjectName="Português"
            teacherName="Professor Um"
           />

            <CardSubject 
            icon={<MaterialCommunityIcons name="math-compass" size={90} color="black" />}
            subjectName="Matemática"
            teacherName="Professor Mauricio"
           />    
            </ViewRow> 

             <ViewRow>
            <CardSubject 
            icon={<Entypo name="globe" size={90} color="black" />}
            subjectName="Geografia"
            teacherName="Professor Tres"
           />


            <CardSubject 
            icon={<Fontisto name="atom" size={90} color="black" />}
            subjectName="Ciências"
            teacherName="Professor Quatro"
           />
            </ViewRow>

            <LinkText onPress={() => (navigation.replace("Main"))} style={{ color: "#A06AFF", left: 0, marginTop: 10}}>Retornar</LinkText>
           


        </ContainerHome>
        
    )
}