import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#C3A1FF", "#A06AFF"],
    start: { x: -1, y: 1 },
    end: { x: 1, y: -1 },
  })`
  width: 100%;
  padding: 16px;
  padding-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 0px 0px 15px 15px;
  elevation: 5;
  margin-bottom: 100px;
`

export const InfoContainer = styled.View`
  flex-direction: column;
  gap: 0px;
  width: 60%;
  justify-content: center;
`

export const BoxUser = styled.View`
  gap: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const ImageUser = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: #E6C8FF;
`