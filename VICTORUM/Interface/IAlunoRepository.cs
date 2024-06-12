
using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IAlunoRepository
    {
        public AlunoDomain BuscarPorId(Guid Id);
        public void Cadastrar(UsuarioDomain user);
        public List<AlunoDomain> ListarPorTurma(Guid Id);
    }
}