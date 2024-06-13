using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.Utils.Mail;
using VICTORUM.ViewModels;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : Controller
    {
        private IAtividadeRepository? atividadeRepository { get; set; }

        public AtividadeController(EmailSendingService emailSendingService)
        {
            atividadeRepository = new AtividadeRepository();
        }
        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(AtividadeViewModel atividade, Guid IdTurma)
        {
            try
            {
                atividadeRepository!.Cadastrar(atividade, IdTurma);
                return Ok("Atividade cadastrada com sucesso");
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
                atividadeRepository!.Deletar(Id);
                return Ok("Atividade deletada com sucesso");
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpGet("BuscarPorData")]
        public IActionResult BuscarPorData(DateTime data, Guid IdUsuario)
        {
            try
            {
                return Ok(atividadeRepository!.BuscarPorData(data, IdUsuario));
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut("Atualizar")]
        public IActionResult Atualizar(Guid Id, AtividadeViewModel atividade)
        {
            try
            {
                atividadeRepository!.Atualizar(Id, atividade);
                return Ok("Atividade atualizada com sucesso");
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
