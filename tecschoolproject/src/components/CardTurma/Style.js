import styled from "styled-components";

export const CardContainer = styled.TouchableOpacity`
    width: 85%;
    height: 90px;
    background-color: #FFFFFF;
    margin-left: 20px;
    elevation: 5;
    flex-direction: row;
    border-radius: 25px;
    margin-bottom: 30px;
`

export const IconContainer = styled.View`
    width: auto;
    height: auto;
    margin-top: 0px;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
`

export const CheckButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 45px;
    height: 45px;
    border: 3px solid #BE9AFF;
    border-radius: 10px;
    align-items: center;
    justify-content: center
`

export const TextContainer = styled.View`
    width: 50%;
    height: 50%;
    margin-left: 10px;
    margin-top: 25px;
`
