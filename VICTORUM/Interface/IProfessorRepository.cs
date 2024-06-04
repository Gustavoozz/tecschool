using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IProfessorRepository
    {
        public List<ProfessorDomain> ListarTodos();
        public ProfessorDomain BuscaPorId(Guid Id);
        public void Cadastrar(UsuarioDomain user);
    }
}
