// importação da url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

// Import dos hooks para controlar os estados
import { 
    useState, 
    useEffect, 
    useContext 
} from "react";

// Importa o contexto de usuário
import { AuthContext } from "../contexts/UserContext";

// Criação do hook para realizar login, enviando dados de usuario e senha para a api
// Verificando se o usuario existe
export function useVerificaLogin(){

    // Importa a função de login do contexto
    const {login} = useContext(AuthContext)

    // Lista com todos os usuários
    const[usuarios, setUsuarios] = useState([]);

    // useEffect para puxar os dados da API
    useEffect(() => {

        // Função para buscar os dados
        async function fetchData() {
            try{
                const req = await fetch(`${url}/usuarios`);
                const resp = await req.json()
                setUsuarios(users);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
}

// Cria o hook para listar os Usuarios, puxando os dados da api
export function useListaUsuarios() {
  //Lista com usuarios
  const [usuarios, setUsuarios] = useState([]);

  // UseEffect para puxar os dados assim que o componente é montado
  useEffect(() => {
    // Função pra buscar os dados da API
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const usuarios = await req.json();
        console.log(usuarios);
        setUsuarios(usuarios);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  // Retorna a lista de usuarios
  return usuarios;
}

// Cria o hook para inserir um usuario
export function useInserirUsuario() {
  // Recebe os dados do produto e faz a requisição para a API
  // com o método POST
  const inserirUsuario = async (formData) => {
    // atualizei aqui
    const req = await fetch(`${url}/usuarios`, {
      method: "POST",
      body: formData,
    });
    const res = await req.json();
    console.log("Usuario registrado");
    // Retorna o produto inserido
    return res;
  };

  return { inserirUsuario };
}

// Cria o hook para bucar um usuario por id
export function useBuscarUsuarioPorId() {
  // Receb o id do produto e faz a requisição para a api
  // com o método GET
  const buscarUsuarioPorId = async (idUsuario) => {
    console.log(idUsuario);
    
    const req = await fetch(`${url}/usuarios/${idUsuario}`);
    const res = await req.json();
    console.log("Usuario encontrado:");
    return res;
  };
  return { buscarUsuarioPorId };
}

// Cria o hook para atualizar um usuario
export function useAtualizaUsuario() {
  // Envia os dados do usuario recebido via data, para o usuario específico que recebeu via id usuario,
  // e faz a requisição para a ai, com o método PUT
  const atualizaUsuario = async (formData, idUsuario) => {
    const req = await fetch(`${url}/usuarios/${idUsuario}`, {
      method: "PUT",
      body: formData,
    });
    const res = await req.json();
    console.log("Atualizado atualizado");
    // Retorna o produto atualizado
    return res;
  };
  return { atualizaUsuario };
}


// Cria o hook para excluir um usuario
export function useDeletaUsuario() {
  // Recebe o id do usuario a ser deletado e faz a requisição para a Api
  // com o método DELETE
  const deletarUsuario = async (idUsuario) => {
    // mudei aqui
    const req = await fetch(`${url}/usuarios/${idUsuario}`, {
      method: "DELETE",
    });
    const res = await req.json();
    // Retorna o usuario deletado
    return res;
  };
  return { deletarUsuario };
}