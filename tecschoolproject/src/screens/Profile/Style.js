import styled from "styled-components";

export const ProfileImage = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 100px;
    background-color: #E6C8FF;
    position: relative;
    top: 40px;
`

export const ButtonCamera = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    padding: 3px;
    border-radius: 10px;
    background-color: #FFFFFF;
    
    position: relative;
    bottom: 15px;
    left: 120px;
    width: 50%;
`