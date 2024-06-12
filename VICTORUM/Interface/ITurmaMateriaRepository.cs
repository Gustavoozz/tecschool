using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface ITurmaMateriaRepository
    {
        public List<TurmaMateriaDomain> Listar();
        public void Cadastrar(TurmaMateriaDomain turmaMateria);
    }
}
