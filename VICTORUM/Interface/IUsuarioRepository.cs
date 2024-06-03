using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IUsuarioRepository
    {
        UsuarioDomain BuscarPorId(Guid Id);
        void Cadastrar(UsuarioDomain usuario);
        UsuarioDomain BuscarPorEmailESenha(string email, string senha);
        bool AlterarSenha(string email, string senhaNova);
        public void AtualizarFoto(Guid id, string novaUrlFoto);
    }
}