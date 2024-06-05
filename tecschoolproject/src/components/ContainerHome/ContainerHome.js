import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerHomeBackGround = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFFBEB;
    width: 100%;
    height: 100%;
`

export const ContainerHomeHeader = styled(LinearGradient).attrs({
    colors: ["#C3A1FF", "#A06AFF"],
    start: { x: -1, y: 1 },
    end: { x: 1, y: -1 },
    })`
    width: 390px;
    height: 143px;
    align-items: center;
    top: 0;
    border-radius: 0px 0px 15px 15px;
`

export const ContainerImageHeader = styled.SafeAreaView`
    width: 95px;
    height: 95px;
    background-color: #E6C8FF;
    border-radius: 25px;
    position: absolute;
    top: 24px;
    left: 29px;
`

export const ContainerHeaderText = styled.Text`
    margin-top: 10px;
    font-size: 28px;
    color: #FAFAFA;
    position: absolute;
    top: 20px;
    left: 134px;
    font-family: 'Poppins_700Bold';
`

export const ContainerHeaderSubText = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    color: #FAFAFA;
    position: absolute;
    top: 60px;
    left: 134px;
`

export const ToDoListCardHome = styled.TouchableOpacity`
    width: 352px;
    height: 100px;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-top: 91px;
`

export const MateriasCardHome = styled.TouchableOpacity`
    width: 352px;
    height: 100px;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-top: 47px;
`

export const FaltasCardHome = styled.TouchableOpacity`
    width: 352px;
    height: 100px;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-top: 49px;
`

export const ToDoListImageHome = styled.SafeAreaView`
    width: 80px;
    height: 80px;
    background-color: #E6C8FF;
    top: 10px;
    left: 10px;
    border-radius: 25px;
`

export const MateriasImageHome = styled.SafeAreaView`
    width: 80px;
    height: 80px;
    background-color: #E6C8FF;
    top: 10px;
    left: 10px;
    border-radius: 25px;
`

export const FaltasImageHome = styled.SafeAreaView`
    width: 80px;
    height: 80px;
    background-color: #E6C8FF;
    top: 10px;
    left: 10px;
    border-radius: 25px;
`

export const ToDoListTextHome = styled.Text`
    font-size: 18px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`

export const MateriasTextHome = styled.Text`
    font-size: 18px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`

export const FaltasTextHome = styled.Text`
    font-size: 18px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`

export const ToDoListSubTextHome = styled.Text`
    font-size: 10px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`

export const MateriasSubTextHome = styled.Text`
    font-size: 10px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`

export const FaltasSubTextHome = styled.Text`
    font-size: 10px;
    font-family: 'Poppins_600SemiBold';
    left: 100px;
    bottom: 60px;
`