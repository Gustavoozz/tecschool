import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

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

