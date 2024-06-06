using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MateriaController : Controller
    {
        private IMateriaRepository? _materiaRepository { get; set; }

        public MateriaController()
        {
            _materiaRepository = new MateriaRepository();
        }

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
                return Ok(materiaDomain);
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

       

    }
}
