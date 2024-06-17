
// Notifications.requestPermissionsAsync()
import { Modal, View } from "react-native"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { ButtonTitle, LinkText, Title } from "../Title/Title"
import { Input } from "../Input/Input"
import { SelectList } from "react-native-dropdown-select-list"
import { useEffect, useState } from "react"
import { Icon } from "react-native-elements"
import api from "../../services/Service"


export const TaskModal = ({
    visible,
    setShowModalTask,
    idTurma,
    setIdTurma,
    ...rest
}) => {
    // CONSTS 

    const [value, setValue] = useState(null);
    const [items, setItems] = useState(null);
    const [turma, setTurma] = useState("")
    const [tarefa , setTarefa] = useState("");
    const [descricao , setDescricao] = useState("");
    const [dataAtividade , setDataAtividade] = useState("");

    async function CadastrarAtividade() {
        console.log(value)
        await api.post(`/Atividade/Cadastrar?IdTurma=${idTurma}`, {
            titulo: tarefa,
            descricao: descricao,
            idMateria: value,
            dataAtividade: dataAtividade,
            status: false,
        })
        .then((response) => setShowModalTask(false))
        .catch(error => {
            console.log(error);
        })
    }


    async function ClinicaLoad() {
        await api.get("/Materia/Listar")
        .then((response) => SyncValues(response.data))
        .catch((error) => console.log(error))
    }

    


    function SyncValues(materias) {
        materias.forEach(element => {
            setItems([
                { key: `${element.idMateria}`, value: `${element.materia}` }
            ])
        });
    }

    useEffect(() => {
        if (items == null) {
            ClinicaLoad()
        }
    }, [])

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

                    <Title style={{ color: '#E5D6FF', fontSize: 25 }}>Agendar tarefa</Title>

                    <Input style={{ width: '100%' }}
                        placeholder="Insira o titulo da tarefa..."
                        onChangeText={(txt) => setTarefa(txt)}
                        value={tarefa}
                    />

                    <Input style={{ width: '100%' }}
                        placeholder="Insira a descrição da tarefa..."
                        onChangeText={(txt) => setDescricao(txt)}
                        value={descricao}
                    />


                    <SelectList
                        onPress={() => ClinicaLoad()}
                        setSelected={(key) => setValue(key)}
                        data={items}
                        boxStyle={{ colorText: "blue" }}
                        save="key"
                        placeholder="Informe a materia..."
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
                        dropdownStyles={{ borderColor: "#A06AFF", borderWidth: 2, height: '23%'}}
                        dropdownTextStyles={{ color: "#A06AFF" }}
                    />


                    <Input style={{ width: '100%' }}
                        placeholder="Insira a data da tarefa..."
                        onChangeText={(txt) => setDataAtividade(txt)}
                        value={dataAtividade}
                    />

                    <ModalButton onPress={() => CadastrarAtividade()}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkText style={{ color: "#A06AFF", left: 0, bottom: 0 }} onPress={() => setShowModalTask(false)}>Cancelar</LinkText>



                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
