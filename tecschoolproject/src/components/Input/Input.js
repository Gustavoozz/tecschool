import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#A06AFF",
    autoCapitalize: "none"
})`
    width: 90%;
    height: 55px;
    background-color: #FBFBFB;
    border-radius: 10px;
    border: 2px solid #A06AFF;
    font-family: Poppins_600SemiBold;
    
    margin-bottom: 30px;
    padding-left: 15px;
`

export const InputEdit = styled(Input).attrs({
    placeholderTextColor: "#8400F2",
    autoCapitalize: "none"
})`
    background-color: #E5D6FF;
    border: 2px solid #FFFFFF;
`

