using Microsoft.AspNetCore.Mvc;
using VICTORUM.Interface;
using VICTORUM.Ultils.Mail;

namespace VICTORUM.Controllers
{
    public class TurmaController : Controller
    {
        private ITurmaRepository _turmaRepository;
        private readonly EmailSendingService _emailSendingService;

        [HttpGet]
        public IActionResult Get()
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
    }
}
