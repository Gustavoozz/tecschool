using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Utils.Mail;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    public class TurmaController : Controller
    {
        private ITurmaRepository? _turmaRepository;


        [HttpGet("Listar")]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_turmaRepository.Listar());
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
                return Ok(_turmaRepository.BuscarPorId(Id));
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
                _turmaRepository.AdicionarAlunoTurma(IdAluno, IdTurma);
                return Ok(_turmaRepository.BuscarPorId(IdTurma));
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
                _turmaRepository.Cadastrar(turmaDomain);
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete("Deletar")]
        public IActionResult Deletar(Guid IdTurma)
        {
            try
            {
                _turmaRepository.Deletar(IdTurma);
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
