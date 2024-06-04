using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IMateriaRepository
    {
        public List<MateriaDomain> ListarTodos();
        public void Cadastrar(MateriaDomain materia);
        public void Deletar(Guid Id);
        public MateriaDomain BuscarPorId(Guid Id);
    }
}
