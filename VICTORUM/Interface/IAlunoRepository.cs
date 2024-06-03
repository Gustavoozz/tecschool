
using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IAlunoRepository
    {
        public List<AlunoDomain> ListarTodos();
        public AlunoDomain BuscaPorId(Guid Id);
        public void AtualizarPerfil(Guid Id, AlunoDomain aluno);
        public void Cadastrar(AlunoDomain aluno);
        public List<AlunoDomain> ListarPorTurma(Guid Id);
        public void Deletar(Guid id);
    }
}




//using webapi.inlock_codefirst.Domains;

//namespace webapi.inlock_codefirst.Interfaces
//{
  //  public interface IEstudioRepository
   // {
    //    List<EstudioDomain> Listar();

      //  EstudioDomain BuscaPorId(Guid id);

      //  void Cadastrar(EstudioDomain estudio);

     //   void Atualizar(Guid id, EstudioDomain estudio);

      //  void Deletar(Guid id);

 //   }
//}
