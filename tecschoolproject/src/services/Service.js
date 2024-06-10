import axios from 'axios';

// declarar a porta da API
const portaApi = '5058';

// declarar o ip da máquina
const ip = "192.168.21.51"

// definir a url padrão;
const apiUrlLocal = `http://${ip}:${portaApi}/api`

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;