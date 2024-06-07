using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.ViewModels;

namespace VICTORUM.Repository
{
    public class FaltaRepository : IFaltaRepository
    {
        TechSchool ctx = new TechSchool();
        public List<FaltaDomain> BuscarPorAluno(Guid IdAluno)
        {
            return ctx.Falta.ToList();
        }

        public void Cadastrar(FaltaDomain falta)
        { 
            try
            {
                ctx.Falta.Add(falta);
                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    

    public List<FaltaDomain> ListarTodos()
        {
            return ctx.Falta.ToList();
        }
    }
}

