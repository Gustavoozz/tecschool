using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IMateriaRepository
    {
        public List<MateriaDomain> ListarTodos();
        public void Cadastrar(); 
    }
}
