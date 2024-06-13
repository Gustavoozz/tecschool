using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;
using Microsoft.EntityFrameworkCore;
using VICTORUM.Ultils;
using VICTORUM.Domains;



namespace VICTORUM.Repository
{
    public class AlunoRepository : IAlunoRepository
    {
        TechSchool ctx = new TechSchool();

        public AlunoDomain BuscarPorId(Guid Id)
        {
            try
            {
                return ctx.Aluno.Select(u => new AlunoDomain()
                {
                    IdAluno = u.IdAluno,
                    Turma = ctx.Turma.Select(z => new TurmaDomain
                    {
                        IdTurma = z.IdTurma,
                        Turma = z.Turma
                    }).FirstOrDefault(x => x.IdTurma == u.IdTurma),
                    RA = u.RA,
                    IdUsuario = u.IdUsuario,
                    IdTurma = u.IdTurma,
                    Usuario = ctx.Usuario.Select(y => new UsuarioDomain
                    {
                        IdUsuario = y.IdUsuario,
                        Foto = y.Foto,
                        Email = y.Email,
                        Nome = y.Nome,
                        TipoUsuarioId = y.TipoUsuarioId,
                        CodRecupSenha = y.CodRecupSenha
                    }).FirstOrDefault(x => x.IdUsuario == u.IdUsuario)

                }).FirstOrDefault(x => x.IdAluno == Id)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(UsuarioDomain user)
        {
            try
            {
                user.Senha = Criptografia.GerarHash(user.Senha!);
                ctx.Usuario.Add(user);
                ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

      

        public List<AlunoDomain> ListarPorTurma(Guid Id)
        {
            return ctx.Aluno.Select(u => new AlunoDomain()
            {
                IdUsuario = u.IdUsuario,
                RA = u.RA,
                IdTurma = u.IdTurma,
                Usuario = ctx.Usuario.FirstOrDefault(x => x.IdUsuario == u.IdUsuario)
            }).Where(x => x.IdTurma == Id).ToList();
        }

       
    }
}
