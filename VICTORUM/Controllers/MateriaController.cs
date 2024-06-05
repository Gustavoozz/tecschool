using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MateriaController : Controller
    {
        private IMateriaRepository? _materiaRepository { get; set; }

        [HttpGet("Listar")]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_materiaRepository?.ListarTodos());
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(MateriaViewModel materiaViewModel)
        {
            try
            {
                MateriaDomain materiaDomain = new MateriaDomain();
                materiaDomain.Materia = materiaViewModel.Materia;
                _materiaRepository?.Cadastrar(materiaDomain);
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult BuscarPorId(Guid Id)
        {
            try
            {
                return Ok(_materiaRepository?.BuscarPorId(Id));
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete("Deletar")]
        public IActionResult Deletar(Guid Id)
        {
            try
            {
                _materiaRepository.Deletar(Id);
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
