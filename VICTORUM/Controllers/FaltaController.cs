using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaltaController : Controller
    {
		private IFaltaRepository _faltaRepository { get; set; }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(FaltaViewModel faltaViewModel)
        {
			try
			{
                FaltaDomain faltaDomain = new FaltaDomain();
                faltaDomain.Falta = faltaViewModel.Falta;
                faltaDomain.DataFalta = faltaViewModel.DataFalta;
                faltaDomain.IdAluno = faltaDomain.IdAluno;
                faltaDomain.IdMateria = faltaDomain.IdMateria;
                _faltaRepository.Cadastrar(faltaDomain);

                return Ok();
            }
			catch (Exception)
			{

				throw;
			}
        }

        [HttpDelete]
        public IActionResult Deletar(Guid Id)
        {
            try
            {
                _faltaRepository.Deletar(Id);
                return Ok();
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

        [HttpGet("BuscarPorAluno")]
        public IActionResult BuscarPorAluno(Guid Id)
        {
            try
            {
                return Ok(_faltaRepository.BuscarPorAluno(Id));
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
