import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, AppRegistry } from 'react-native';
import { ContainerHome } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { LinkText, Title } from "../../components/Title/Title";
import CircularProgress from 'react-native-circular-progress-indicator'; 
import api from '../../services/Service';

export const FaltasAluno = ({ navigation }) => {
    
const [tipoUsuario, setTipoUsuario] = useState("")
const [idUsuario, setIdUsuario] = useState("");

const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
const [percentage, setPercentage] = useState(subjects[0].percentage);
const pan = useRef(new Animated.ValueXY()).current;

const subjects = [
    { name: 'Geografia', percentage: 50 },
    { name: 'Matemática', percentage: 75 },
    { name: 'História', percentage: 60 },
]; // Divide a quantidade de faltas pela quantidade de dias letivos e multiplica por 100

async function profileLoad() {
    const token = await UserDecodeToken();

    if (token !== null) {
        setIdUsuario(token.user);
        setTipoUsuario(token.role)
       

        await UserLoad(token);
    }
  }   
  
  
//   async function UserLoad(token) {

//     if (token.role === 'Aluno') {
//     await api.get(`/Aluno/BuscarPorId?id=${token.user}`)
//     .then(response => {
//         console.log(token.user);
//         setUser(response.data)
//     }).catch(error => {
//         console.log(error);
//     })
//     } else {
//     await api.get(`/Professor/BuscaPorId?id=${token.user}`)
//     .then(response => {
      
       
//         setUser(response.data)
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     }
// }

async function ListarFaltas() {
    await api.get("/Falta/Listar")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}
  


async function ListarFaltaPorMateria() {
    await api.get(`/Falta/BuscarPorAlunoMateria?IdAluno=${user.id}&IdMateria=E2119FB2-AC3A-4628-9179-23E25DC7E944`)
    .then(response => {

    }).catch(error => {
        console.log(error);
    })
}


useEffect(() => {
    setPercentage(subjects[currentSubjectIndex].percentage);
}, [currentSubjectIndex]);


useEffect(() => {
    ListarFaltas()
}, [])

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    // Swipe right
                    setCurrentSubjectIndex((prevIndex) => (prevIndex === 0 ? subjects.length - 1 : prevIndex - 1));
                } else if (gestureState.dx < -50) {
                    // Swipe left
                    setCurrentSubjectIndex((prevIndex) => (prevIndex === subjects.length - 1 ? 0 : prevIndex + 1));
                }
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            },
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x }],
                { useNativeDriver: false }
            ),
        })
    ).current;

    return (
        <ContainerHome style={styles.lis}>
            <Header/>
            <Title style={styles.title}>FALTAS</Title>
            <View style={styles.cardContainer}>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={[styles.card, { transform: [{ translateX: pan.x }] }]}
                >
                    <Text style={styles.subject}>{subjects[currentSubjectIndex].name}</Text>
                    <CircularProgress
                        value={percentage}
                        radius={60}
                        duration={2000}
                        progressValueColor={'#A06AFF'}
                        maxValue={100}
                        title={'%'}
                        titleColor={'#A06AFF'}
                        titleStyle={{ fontWeight: 'bold' }}
                        activeStrokeColor={'#A06AFF'}
                        inActiveStrokeColor={'#A06AFF'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={10}
                        activeStrokeWidth={10}
                    />
                </Animated.View>
            </View>

            <LinkText style={{ color: '#9D67FD', left: 0, bottom: 50}} onPress={() => navigation.replace("Main")}>Retornar</LinkText>
        </ContainerHome>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 0,
        color: '#9D67FD',
        fontSize: 30,
        textAlign: 'center',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -80,
    },
    card: {
        width: 200,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    subject: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 30,
    },

    
});
