import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Title } from "../../components/Title/Title";
import { AntDesign } from '@expo/vector-icons';
import { ContainerWhite } from './Style';
import api from '../../services/Service';
import { CardAluno } from '../../components/CardAluno/CardAluno';

export const FaltasProfessor = ({ navigation }) => {

    const [turma, setTurma] = useState("")
    const [aluno, setAluno] = useState([]);
    const [alunoId, setAlunoId] = useState([]);

    async function ListarTurmas() {
        await api.get(`/Listar`)
            .then(response => {
                console.log(response.data);
                setTurma(response.data)
            }).catch(error => {
                console.log(error);
            })

    }
    // async function ListarPorTurma() {
    //     await api.get(`/Aluno/ListarPorTurma?IdTurma=${}`)
    //     .then(response => {

    //     })
    // }

    useEffect(() => {
        ListarTurmas();
    }, [])





    return (
        <ContainerWhite>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main')}>
                <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
            <Title style={styles.title}>FALTAS</Title>
            <View style={styles.listContainer}>
                {Array(5).fill().map((_, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={styles.studentName}>Nome do Aluno</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <AntDesign name="checksquare" size={30} color="#29AF40" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closesquare" size={30} color="#AF2929" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ContainerWhite>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A164E8',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        padding: 10,
    },
    title: {
        marginBottom: 35,
        marginTop: 50,
        color: '#7D5BA6',
        fontSize: 32
    },
    listContainer: {
        width: '100%',
        backgroundColor: '#FFFBEB',
        padding: 20,
        borderRadius: 20,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    studentName: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'Poppins_300Light'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
