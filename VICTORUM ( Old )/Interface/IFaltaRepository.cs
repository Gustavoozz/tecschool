using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IFaltaRepository
    {
        public void Cadastrar(FaltaDomain falta);
        public List<FaltaDomain> ListarTodos();
        public List<FaltaDomain> BuscarPorAluno(Guid IdAluno);
    }
}
