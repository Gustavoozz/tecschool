import styled from "styled-components";

export const CardContainerSubject = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})`
    width: 150px;
    height: 230px;
    background-color: #FFFFFF;
    elevation: 5;
    border-radius: 25px;
    margin-bottom: 20px;
`

export const IconContainerSubject = styled.View`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px
`

export const TextContainer = styled.View`
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
    border: 1px solid blue;
`
