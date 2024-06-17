using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmaController : Controller
    {
        private ITurmaRepository _turmaRepository { get; set; }

        public TurmaController()
        {
            _turmaRepository = new TurmaRepository();
        }


        [HttpGet("Listar")]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_turmaRepository?.Listar());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult BuscarPorId(Guid Id)
        {
            try
            {
                return Ok(_turmaRepository?.BuscarPorId(Id));
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPut("AdicionarAlunoATurma")]
        public IActionResult AdicionarAlunoTurma(Guid IdAluno, Guid IdTurma)
        {
            try
            {
                _turmaRepository?.AdicionarAlunoTurma(IdAluno, IdTurma);
                return Ok(_turmaRepository?.BuscarPorId(IdTurma));
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(TurmaViewModel turmaViewModel)
        {
            try
            {
                TurmaDomain turmaDomain = new TurmaDomain();
                turmaDomain.Turma = turmaViewModel.Turma;
                turmaDomain.Alunos = new List<AlunoDomain>();
                if (turmaDomain != null)
                {
                    _turmaRepository?.Cadastrar(turmaDomain);
                }
                return Ok(turmaDomain);
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
