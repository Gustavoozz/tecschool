using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.ViewModels;

namespace VICTORUM.Repository
{
    public class FaltaRepository : IFaltaRepository
    {
        TechSchool ctx = new TechSchool();
        public List<FaltaDomain> BuscarPorAlunoMateria(Guid IdAluno, Guid IdMateria)
        {
            return ctx.Falta.Where(x => x.IdAluno == IdAluno).Where(x => x.IdMateria == IdMateria).ToList();
        }

        public List<FaltaDomain> BuscarPorTurmaMateria(Guid IdTurma, Guid IdMateria)
        {
            try
            {
                return ctx.Falta.Where(x => x.Aluno!.IdTurma == IdTurma).Where(x => x.IdMateria == IdMateria).Select(x => new FaltaDomain
                {
                    IdFalta = x.IdFalta,
                    Falta = x.Falta,
                    IdMateria = x.IdMateria,
                    IdAluno = x.IdAluno,
                    Aluno = ctx.Aluno.Select(y => new AlunoDomain
                    {
                        IdAluno = y.IdAluno,
                        RA = y.RA,
                        IdTurma = y.IdTurma,
                        IdUsuario = y.IdUsuario,
                        Usuario = ctx.Usuario.Select(z => new UsuarioDomain
                        {
                            Nome = z.Nome,
                            Email = z.Email,
                            Foto = z.Foto
                        }).FirstOrDefault(z => z.IdUsuario == y.IdUsuario)
                    }).FirstOrDefault(y => y.IdAluno == x.IdAluno),
                    DataFalta = x.DataFalta
                }).ToList();
            }
            catch (Exception)
            {

                throw;
            }
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

