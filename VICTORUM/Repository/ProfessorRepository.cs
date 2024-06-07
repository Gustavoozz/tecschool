using Microsoft.EntityFrameworkCore;
using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Ultils;

namespace VICTORUM.Repository
{

    public class ProfessorRepository : IProfessorRepository
    {
        TechSchool ctx = new TechSchool();

        public ProfessorDomain BuscaPorId(Guid Id)
        {
            try
            {
                return ctx.Professor.Include(x => x.IdMateria).FirstOrDefault(x => x.IdProfessor == Id)!;
            }
            catch (Exception)
            {
                throw;
            }

        }

        public void Cadastrar(UsuarioDomain user)
        {
            user.Senha = Criptografia.GerarHash(user.Senha!);
            ctx.Usuario.Add(user);
            ctx.SaveChanges();
        }

        public List<ProfessorDomain> ListarTodos()
        {
            return ctx.Professor.Include(x => x.IdUsuario).ToList();
        }
    }
}
