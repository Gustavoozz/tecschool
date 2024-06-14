import { LinearGradient } from "expo-linear-gradient"
import styled from "styled-components"

export const ContainerWhite = styled(LinearGradient).attrs({
    colors: ["#FFFBEB", "#FFFBEB"],
    start: { x: -1, y: 1 },
    end: { x: 1, y: -1 },
  })`
  padding-top: 50px;
  height: 100%;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
  `