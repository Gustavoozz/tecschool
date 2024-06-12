using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface ITurmaRepository
    {
        List<TurmaDomain> Listar();
        TurmaDomain BuscarPorId(Guid Id);
        void AdicionarAlunoTurma(Guid IdAluno, Guid IdTurma);
      
        void Cadastrar(TurmaDomain turmaDomain);
    }
}
