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
            return ctx.Professor.Select(x => new ProfessorDomain
            {
                IdProfessor = x.IdProfessor,
                IdMateria = x.IdMateria,
                Materia = ctx.Materia.FirstOrDefault(y => y.IdMateria == x.IdMateria),
                IdUsuario = x.IdUsuario,
                Usuario = ctx.Usuario.Select(z => new UsuarioDomain
                {
                    IdUsuario = z.IdUsuario,
                    Nome = z.Nome,
                    Email = z.Email,
                    Foto = z.Foto
                }).FirstOrDefault(a => a.IdUsuario == x.IdUsuario)
            }).ToList();
        }
    }
}
