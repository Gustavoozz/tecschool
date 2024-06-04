using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;

namespace VICTORUM.Repository
{
    public class FaltaRepository : IFaltaRepository
    {
        TechSchool ctx = new TechSchool();
        public FaltaDomain BuscarPorAluno(Guid IdAluno)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(FaltaDomain falta)
        {
            throw new NotImplementedException();
        }

        public void Deletar(Guid Id)
        {
            throw new NotImplementedException();
        }

        public List<FaltaDomain> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
