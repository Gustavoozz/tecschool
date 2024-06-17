


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
    idTurma,
    setIdTurma,
    setShowModalTask,
    ...rest
}) => {

    const [ListaDeTurmas, setListaDeTurmas] = useState(null);
    const [items, setItems] = useState(null);


    async function ListarTurmas() {
        await api.get("/Turma/Listar").then((response) => setListaDeTurmas("teste" + response.data)).catch((error) => console.log(error));
    }

    useEffect(() => {
        if (ListaDeTurmas == null) {
            ListarTurmas();
        }
    }, [])

    function SyncValues(turmas) {
        turmas.forEach(element => {
            console.log(element)
            setItems([
                { key: `${element.IdTurma}`, value: `${element.turma}` }
            ])
        });
    }

    async function TurmaLoad() {
        await api.get("/Turma/Listar")
            .then((response) => SyncValues(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if (items == null) {
            ListarTurmas()
        }
    }, [])

    // CONSTS 
    //const [materia , setMateria] = useState("");

    // async function ListarTurmas() {
    //     await api.get(`/Listar`)
    //     .then(response => {
    //         console.log(response.data);
    //         setTurma(response.data)
    //     }).catch(error => {
    //         console.log(error);
    //     })


    // FUNCTIONS
    // const HandleCallNotifications = async () => {
    //     const { status } = await Notifications.getPermissionsAsync()

    //     if (status !== "granted") {
    //         alert("As notificações do usuário não estão ativas!")
    //         return;
    //     }

    //     await Notifications.scheduleNotificationAsync({
    //         content: {
    //             title: "Sua consulta foi cancelada!",
    //             body: "Consulta cancelada..."
    //         },
    //         trigger: null
    //     });
    // }

    // const Cancelamento = async () => {


    //     await api.put(`/Consultas/Status?idConsulta=${consulta.id}&status=${status}`)
    //         .then(response => {
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });

    //     HandleCallNotifications();

    //     setShowSpinner(false);

    //     setUpdateData(false);
    //     setUpdateData(true);

    //     setShowModalCancel(false);
    // }



    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <Title style={{ color: '#E5D6FF', fontSize: 25 }}>Selecionar turmas</Title>

                    <SelectList
                        onPress={() => TurmaLoad()}
                        setSelected={(val) => setValue(val)}
                        data={ListaDeTurmas}
                        boxStyle={{ colorText: "blue" }}
                        save="value"
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
                        dropdownStyles={{ borderColor: "#A06AFF", borderWidth: 2, height: '23%' }}
                        dropdownTextStyles={{ color: "#A06AFF" }}
                    />

                    <ModalButton onPress={() => { setShowModalTask(true), setShowModalTurma(false) }}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkText style={{ color: "#A06AFF", left: 0, bottom: 0 }} onPress={() => setShowModalTurma(false)}>Cancelar</LinkText>

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
