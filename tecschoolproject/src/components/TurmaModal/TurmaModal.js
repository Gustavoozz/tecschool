


// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true
//     })
// })

import { Modal } from "react-native"
import { ModalButton, ModalContent, PatientModal } from "../TaskModal/Style"
import { ButtonTitle, LinkText, Title } from "../Title/Title"
import { FlatList } from "react-native"
import { CardTask } from "../CardTask/CardTask"
import { useEffect, useState } from "react"
import api from "../../services/Service"
import { CardTurma } from "../CardTurma/CardTurma"
import { TouchableOpacity } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import { Icon } from "react-native-elements"

export const TurmaModal = ({
    visible,
    setShowModalTurma,
    setIdTurma,
    setShowModalTask,
    idTurma,
    ...rest
}) => {

    const [items, setItems] = useState(null);

    function SyncValues(turmas) {
        console.log(turmas)
        turmas.forEach(element => {
            setItems([
                { key: `${element.idTurma}`, value: `${element.turma}` }
            ])
        });
    }
    
    useEffect(() => {
        console.log("IdTurma: " + idTurma)
    }, [idTurma])

    async function TurmaLoad() {
        await api.get("/Turma/Listar")
            .then((response) => SyncValues(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if (items == null) {
            TurmaLoad()
        }
    }, [])


    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <Title style={{ color: '#E5D6FF', fontSize: 25 }}>Selecionar turmas</Title>

                    <SelectList
                        onPress={() => TurmaLoad()}
                        setSelected={(key) => setIdTurma(key)}
                        data={items}
                        boxStyle={{ colorText: "blue" }}
                        save="key"
                        placeholder="Informe a turma..."
                        fontFamily="Poppins_600SemiBold"
                        boxStyles={{ borderColor: "#A06AFF", borderWidth: 2, width: '100%', marginBottom: 30 }}
                        inputStyles={{ color: "#A06AFF" }}
                        dropdownItemStyles={{ color: "#60BFC5" }}
                        arrowicon={<Icon
                            size={22}
                            name='caret-down'
                            type='font-awesome'
                            color='#A06AFF'
                        />}
                        closeicon={<Icon
                            size={22}
                            name='close'
                            type='antDesign'
                            color='#A06AFF'
                        />}
                        searchicon={
                            <Icon
                                size={22}
                                name='search'
                                type='antDesign'
                                color='#A06AFF'
                            />
                        }
                        dropdownStyles={{ borderColor: "#A06AFF", borderWidth: 2, height: '50%' }}
                        dropdownTextStyles={{ color: "#A06AFF" }}
                    />

                    <ModalButton disabled={idTurma == null} onPress={() => {setShowModalTask(true), setShowModalTurma(false) }}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkText style={{ color: "#A06AFF", left: 0, bottom: 0 }} onPress={() => {setShowModalTurma(false), setIdTurma(null)}}>Cancelar</LinkText>

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
