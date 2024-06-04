using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IFaltaRepository
    {
        public void Cadastrar(FaltaDomain falta);
        public void Deletar(Guid Id);
        public List<FaltaDomain> ListarTodos();
        public FaltaDomain BuscarPorAluno(Guid IdAluno);
    }
}
