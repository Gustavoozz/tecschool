
// Notifications.requestPermissionsAsync()
import { Modal, View } from "react-native"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { ButtonTitle, LinkText, Title } from "../Title/Title"
import { Input } from "../Input/Input"
import { SelectList } from "react-native-dropdown-select-list"
import { useEffect, useState } from "react"
import { Icon } from "react-native-elements"
import api from "../../services/Service"
import { UserDecodeToken } from "../../utils/Auth"


export const TaskModal = ({
    visible,
    setShowModalTask,
    idTurma,
    setIdTurma,
    dataSelecionada,
    ...rest
}) => {
    // CONSTS 

    const [value, setValue] = useState(null);
    const [items, setItems] = useState(null);
    const [turma, setTurma] = useState("")
    const [tarefa, setTarefa] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataAtividade, setDataAtividade] = useState("");
    const [user, setUser] = useState("");

    async function CadastrarAtividade() {
        await api.post(`/Atividade/Cadastrar?IdTurma=${idTurma}`, {
            titulo: tarefa,
            descricao: descricao,
            idMateria: user.materia.idMateria,
            dataAtividade: dataSelecionada,
            status: false,
        })
            .then(() => {
                setShowModalTask(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async function profileLoad() {
        const token = await UserDecodeToken();

        await api.get(`/Professor/BuscaPorId?id=${token.user}`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        profileLoad()
    }, [])


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

                    <ModalButton onPress={CadastrarAtividade}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkText style={{ color: "#A06AFF", left: 0, bottom: 0 }} onPress={() => setShowModalTask(false)}>Cancelar</LinkText>



                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
