using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Domains;
using VICTORUM.Interface;
using VICTORUM.ViewModels;

namespace VICTORUM.Repository
{
    public class AtividadeRepository : IAtividadeRepository
    {
        TechSchool ctx = new TechSchool(); 
        public void Atualizar(Guid Id, AtividadeViewModel atividade)
        {
            try
            {
                AtividadeDomain atividadeBuscado = ctx.Atividade.FirstOrDefault(x => x.IdAtividade == Id)!; 
                atividadeBuscado.Status = atividade.Status;
                ctx.Update(atividadeBuscado);
                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<AtividadeDomain> BuscarPorData(DateTime data, Guid Id)
        {
            try
            {
                return ctx.Atividade.Where(x => x.DataAtividade == data && x.IdUsuario == Id).ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(AtividadeViewModel atividade, Guid IdTurma)
        {
            try
            {
                foreach (AlunoDomain aluno in ctx.Aluno.Select(z => new AlunoDomain
                {
                    IdAluno = z.IdAluno,
                    RA = z.RA,
                    IdTurma = z.IdTurma,
                    Turma = ctx.Turma.FirstOrDefault(y => y.IdTurma == z.IdTurma),
                    IdUsuario = z.IdUsuario,
                }).Where(x => x.IdTurma == IdTurma).ToList()) 
                {
                    AtividadeDomain novaAtividade = new AtividadeDomain
                    {
                        Titulo = atividade.Titulo,
                        Descricao = atividade.Descricao,
                        IdMateria = atividade.IdMateria,
                        Materia = ctx.Materia.FirstOrDefault(x => x.IdMateria == atividade.IdMateria),
                        Usuario = ctx.Usuario.FirstOrDefault(x => x.IdUsuario == aluno.IdAluno),
                        DataAtividade = atividade.DataAtividade,
                        Status = false
                    };
                    ctx.Atividade.Add(novaAtividade);
                }
                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Deletar(Guid Id)
        {
            ctx.Atividade.Remove(ctx.Atividade.FirstOrDefault(y => y.IdAtividade == Id)!);
        }
    }
}
