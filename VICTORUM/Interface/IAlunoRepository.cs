
using VICTORUM.Domain;

namespace VICTORUM.Interface
{
    public interface IAlunoRepository
    {
        List<AlunoDomain> Listar();

           AlunoDomain BuscaPorId(Guid id);

          void Cadastrar(AlunoDomain aluno);

          void Atualizar(Guid id, AlunoDomain aluno);

          void Deletar(Guid id);
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
