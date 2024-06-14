import { Text, View } from "react-native"
import { Container } from "../Container/Style"

export const CardAluno = () => {
    return(
        <Container>
            <Text>Nome do Aluno</Text>
        <View>
            <TouchableOpacity>
                <AntDesign name="checksquare" size={30} color="#29AF40" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="closesquare" size={30} color="#AF2929" />
            </TouchableOpacity>
        </View>
        </Container>
        
    )
}