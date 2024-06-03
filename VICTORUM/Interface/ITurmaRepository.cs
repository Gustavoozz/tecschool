using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface ITurmaRepository
    {
        public interface IUsuarioRepository
        {
            List<TurmaDomain> Listar();

            TurmaDomain BuscarPorId(Guid Id);

            TurmaDomain Deletar(Guid Id);

            void Cadastrar(TurmaDomain turmaDomain);
        }
    }
}
