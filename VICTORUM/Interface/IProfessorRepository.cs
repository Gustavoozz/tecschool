using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IProfessorRepository
    {
        public List<ProfessorDomain> ListarTodos();
        public ProfessorDomain BuscaPorId(Guid Id);
        public void AtualizarPerfil(Guid Id, ProfessorDomain professor);
        public void Cadastrar(ProfessorDomain professor);
        public void Deletar(Guid Id);
    }
}
