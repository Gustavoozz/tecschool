import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { ButtonTitle, Title } from "../../components/Title/Title";
import { AntDesign } from '@expo/vector-icons';
import { ContainerWhite } from './Style';
import api from '../../services/Service';
import { CardAluno } from '../../components/CardAluno/CardAluno';
import { UserDecodeToken } from '../../utils/Auth';
import { ModalButton } from '../../components/TaskModal/Style';

export const FaltasProfessor = ({ navigation, route }) => {

    const [turma, setTurma] = useState(null)
    const [aluno, setAluno] = useState([]);
    const [alunoId, setAlunoId] = useState([]);
    const [materia, setMateria] = useState([]);



    // FUNCTIONS
    const ProfileLoad = async () => {

        const token = await UserDecodeToken();

        FindUser(token.user)
    }

    useEffect(() => {
        ProfileLoad();
    }, [])

    async function FindUser(idProfessor) {
        await api.get(`/Professor/BuscaPorId?id=${idProfessor}`).then((response) => setMateria(response.data.materia.idMateria)).catch((error) => console.log(error))
    }

    async function ListarTurmas() {
        await api.get(`Turma/BuscarPorId?Id=${route.params.idTurma}`)
            .then(response => {
                setTurma(response.data.alunos)
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (turma == null) {
            ListarTurmas();
        }
    })

    async function Falta(status, idAluno) {
        await api.post(`/Falta/Cadastrar`, {
            falta: status,
            idMateria: materia,
            idAluno: idAluno,
            dataFalta: new Date()
        }).then((response) => console.log(response.data))
        setTurma(turma.filter(aluno => aluno.idAluno !== idAluno));
    }




    return turma != null ? (
        <ContainerWhite>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.replace('SelecionarTurma')}>
                <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
            <Title style={styles.title}>FALTAS</Title>
            <View style={styles.listContainer}>
                <FlatList showsHorizontalScrollIndicator={false} data={turma} renderItem={({ item }) =>
                (
                    <View key={item.idAluno} style={styles.listItem}>
                        <Text style={styles.studentName}>{item.usuario.nome}</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={() => Falta(false, item.idAluno)}>
                                <AntDesign name="checksquare" size={30} color="#29AF40" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Falta(true, item.idAluno)}>
                                <AntDesign name="closesquare" size={30} color="#AF2929" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
                <ModalButton disabled={turma.length > 0} onPress={() => navigation.navigate("Main")}>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </ModalButton>
            </View>
        </ContainerWhite >
    ) : (<>
        <ActivityIndicator />
    </>)
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
