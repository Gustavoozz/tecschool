using VICTORUM.Domains;
using VICTORUM.ViewModels;

namespace VICTORUM.Interface
{
    public interface IAtividadeRepository
    {
        public void Cadastrar(AtividadeViewModel atividade, Guid idTurma);
        public void Atualizar(Guid Id, AtividadeViewModel atividade);
        public void Deletar(Guid Id);
        public List<AtividadeDomain> BuscarPorData(DateTime data, Guid Id);
    }
}
