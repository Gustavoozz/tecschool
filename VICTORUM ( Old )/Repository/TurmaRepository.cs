using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;

namespace VICTORUM.Repository
{
    public class TurmaRepository : ITurmaRepository
    {
        TechSchool ctx = new TechSchool();
        public void AdicionarAlunoTurma(Guid IdAluno, Guid IdTurma)
        {
            TurmaDomain turmaBuscado = ctx.Turma.FirstOrDefault(x => x.IdTurma == IdTurma)!;

            AlunoDomain alunoAchado = ctx.Aluno.FirstOrDefault(x => x.IdAluno == IdAluno)!;
            if(alunoAchado != null)
            {
                turmaBuscado.Alunos!.Add(alunoAchado);
            }
            ctx.SaveChanges();
        }

        public TurmaDomain BuscarPorId(Guid Id)
        {
            return ctx.Turma.FirstOrDefault(x => x.IdTurma == Id)!;
        }

        public void Cadastrar(TurmaDomain turmaDomain)
        {
          
            ctx.Turma.Add(turmaDomain);
            ctx.SaveChanges();
            
        }

       

        public List<TurmaDomain> Listar()
        {
            return ctx.Turma.Select(u => new TurmaDomain
            {

                IdTurma = u.IdTurma,
                Turma = u.Turma,
                Alunos = ctx.Aluno.Select(y => new AlunoDomain
                {
                    IdAluno = y.IdAluno,
                    IdTurma = y.IdTurma,
                    RA = y.RA,
                    IdUsuario = y.IdUsuario,
                    Usuario = y.Usuario,
                }).Where(x => x.IdTurma == u.IdTurma).ToList()

            }).ToList();
        }
    }
}
