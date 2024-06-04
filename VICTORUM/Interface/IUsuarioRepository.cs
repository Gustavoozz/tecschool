using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IUsuarioRepository
    {
        void Cadastrar(UsuarioDomain usuario);
        UsuarioDomain BuscarPorId(Guid Id);
        UsuarioDomain BuscarPorEmailESenha(string email, string senha);
        bool AlterarSenha(string email, string senhaNova);
        public void AtualizarFoto(Guid id, string novaUrlFoto);
    }
}