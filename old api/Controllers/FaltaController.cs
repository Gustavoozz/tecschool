using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaltaController : Controller
    {
		private IFaltaRepository _faltaRepository { get; set; }

        public FaltaController()
        {
            _faltaRepository = new FaltaRepository();
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(FaltaViewModel faltaViewModel)
        {
			try
			{
                FaltaDomain faltaDomain = new FaltaDomain();

                faltaDomain.Falta = faltaViewModel.Falta;
                faltaDomain.DataFalta = faltaViewModel.DataFalta;
                faltaDomain.IdAluno = faltaViewModel.IdAluno;
                faltaDomain.IdMateria = faltaViewModel.IdMateria;

                _faltaRepository.Cadastrar(faltaDomain);

                return Ok(faltaDomain);
            }
			catch (Exception)
			{

				throw;
			}
        }

        [HttpGet("Listar")]
        public IActionResult Listar() 
        {
            try
            {
                return Ok(_faltaRepository.ListarTodos());
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("BuscarPorAlunoMateria")]
        public IActionResult BuscarPorAlunoMateria(Guid IdAluno, Guid IdMateria)
        {
            try
            {
                return Ok(_faltaRepository.BuscarPorAlunoMateria(IdAluno, IdMateria));
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("BuscarPorTurmaMateria")]
        public IActionResult BuscarPorTurmaMateria(Guid IdTurma, Guid IdMateria)
        {
            try
            {
                return Ok(_faltaRepository.BuscarPorTurmaMateria(IdTurma, IdMateria));
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
