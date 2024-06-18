import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { ButtonTitle, Title } from "../../components/Title/Title";
import { AntDesign } from '@expo/vector-icons';
import { ContainerWhite } from './Style';
import api from '../../services/Service';
import { CardAluno } from '../../components/CardAluno/CardAluno';
import { CardTurma } from '../../components/CardTurma/CardTurma';
import { LinkText } from '../RedefinirSenha/Style';
import { Button } from '../../components/Button/Button';

export const SelecionarTurma = ({ navigation }) => {

    const [turma, setTurma] = useState(null);
    const [idTurma, setIdTurma] = useState("");

    async function ListarTurmas() {
        await api.get(`Turma/Listar`)
            .then(response => {
                setTurma(response.data)
            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        if (turma == null) {
            ListarTurmas();
        }
    })

    return (
        <ContainerWhite>
            <ScrollView horizontal={true} style={{ flexDirection: "column" }}>

                <SafeAreaView style={{ width: "100%" }}>

                    <FlatList showsHorizontalScrollIndicator={false} data={turma} renderItem={({ item }) =>

                    (
                        <CardTurma
                            onPress={() => setIdTurma(item.idTurma)}
                            style={{ backgroundColor: "blue" }}
                            taskName={item.turma}
                        />
                    )
                    }
                    />
                </SafeAreaView>
            </ScrollView>
            <Button
                onPress={() => navigation.navigate("FaltasProfessor", { idTurma: idTurma })}
                style={{ backgroundColor: '#4B0082', paddingVertical: 0, paddingHorizontal: 20, borderRadius: 5 }}
            >
                <ButtonTitle style={{ color: '#fff', width: '100%' }}>CONFIRMAR</ButtonTitle>
            </Button>
            <LinkText onPress={() => (navigation.replace("Main"))} style={{ left: 0, marginTop: 25, color: '#BE9AFF' }}>Cancelar</LinkText>
        </ContainerWhite >
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
