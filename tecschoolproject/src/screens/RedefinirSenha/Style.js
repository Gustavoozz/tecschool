import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const ContainerCream = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: #FFFBEB;
`

export const ContainerPurple = styled(LinearGradient).attrs({
    colors: ["#C3A1FF", "#A06AFF"],
    start: { x: -1, y: 1 },
    end: { x: 1, y: -1 },
  })`
  
  height: 75%;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`
export const ContainerPurpleSecond = styled(LinearGradient).attrs({
  colors: ["#C3A1FF", "#A06AFF"],
  start: { x: -1, y: 1 },
  end: { x: 1, y: -1 },

})`
  height: 70%;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`


export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: #FFFBEB;
`

export const ContainerHome = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFBEB;
`

export const ViewRow = styled.View`
  flex: 1;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #FFFBEB;
`

export const Title = styled.Text`
    font-family: Poppins_300Light;
    font-size: 35px;
    color: #FFFDF5;
    text-transform: uppercase;

    text-align: center;
    margin-top: 25px;
    margin-bottom: 30px;
`

export const ButtonTitle = styled.Text`
    font-family: Poppins_600SemiBold;
    color: #FFFDF5;
    text-transform: uppercase;
    font-size: 15px;

    justify-content: center;
    text-align: center;
    padding: 18px
`

export const LinkText = styled.Text`
    font-family: Poppins_600SemiBold;
    color: #FFFDF5;
    font-size: 13px;
    text-decoration: underline;
    
    position: relative;
    left: 90px;
    bottom: 15px;
`

export const LinkText2 = styled.Text`
  font-family: Poppins_600SemiBold;
  color: #FFFDF5;
  font-size: 13px;
  text-decoration: underline;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin: 15px; 
`

export const SemiBoldText = styled.Text`
    font-family: Poppins_600SemiBold;
    color: black;
    width: 50%;
    font-size: 15px;
`

export const SubTitle = styled.Text`
    font-family: Poppins_500Medium;
    color: black;
    width: 100%;
    font-size: 10px;
`


export const Txt = styled.Text`
font-family: Poppins_300Light;
font-size: 18px;
color: #FFFDF5;
text-align: center;
margin-top: 25px;
margin-bottom: 35px;
`
