import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFFBEB;
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

