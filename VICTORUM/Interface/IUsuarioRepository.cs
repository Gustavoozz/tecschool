using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IUsuarioRepository
    {
        public interface IUsuarioRepository
        {
            UsuarioDomain BuscarPorId(Guid Id);

            UsuarioDomain BuscarUsuario(string email, string senha);

            void Cadastrar(UsuarioDomain usuario);
        }
    }
}
