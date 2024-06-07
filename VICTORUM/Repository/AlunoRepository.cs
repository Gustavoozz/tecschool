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
                return ctx.Aluno.FirstOrDefault(x => x.IdAluno == Id)!;
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
            return ctx.Aluno.Select(u => new AlunoDomain
            {
                IdUsuario = u.IdUsuario,
                Turma = u.Turma,
                Usuario = u.Usuario

            }).ToList();
        }

       
    }
}
