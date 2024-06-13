import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ContainerHome } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import CircularProgress from 'react-native-circular-progress-indicator';

export const FaltasProfessor = ({ navigation }) => {
    const [percentage, setPercentage] = useState(50);

    useEffect(() => {
        const fetchData = async () => {
            const data = await new Promise(resolve => setTimeout(() => resolve(75), 2000));
            setPercentage(data);
        };

        fetchData();
    }, []);

    return (
        <ContainerHome>
            <Header />
            <Title style={styles.title}>FALTAS</Title>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.subject}>Geografia</Text>
                    <CircularProgress
                        value={percentage}
                        radius={60}
                        duration={2000}
                        progressValueColor={'#000'}
                        maxValue={100}
                        title={'%'}
                        titleColor={'#000'}
                        titleStyle={{ fontWeight: 'bold' }}
                        activeStrokeColor={'#9D67FD'}
                        inActiveStrokeColor={'#e0e0e0'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={10}
                        activeStrokeWidth={10}
                    />
                </View>
            </View>
        </ContainerHome>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 0,
        marginBottom: 10,
        color: '#9D67FD',
        fontSize: 30,
        textAlign: 'center',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50, 
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
        fontWeight: 'bold',
        marginBottom: 20,
    },
    percentage: {
        fontSize: 20,
        color: '#000',
    },
});