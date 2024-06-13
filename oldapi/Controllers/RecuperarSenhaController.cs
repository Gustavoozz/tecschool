using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using VICTORUM.Utils.Mail;
using VICTORUM.Context;

namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : Controller
    {
        private readonly TechSchool _context = new TechSchool();
        private readonly EmailSendingService _emailSendingService;
        public RecuperarSenhaController( EmailSendingService emailSendingService)
        {
            _emailSendingService = emailSendingService;
        }

        [HttpPost]
        public async Task<ActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                var user = await _context.Usuario.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                //gerar código com 4 algarismos
                Random random = new Random();

                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email, recoveryCode);

                return Ok("Código enviado com sucesso");
            }
            catch (Exception er)
            {

                throw;
            }
        }

        [HttpPost("EnivarCodigoRecuperacao")]

        public async Task<ActionResult> TryRecoveryCode(string email, int code)
        {
            try
            {
                var user = await _context.Usuario.FirstOrDefaultAsync(x => x.Email == email);

                if (user!.CodRecupSenha == code)
                {
                    user.CodRecupSenha = null;
                    await _context.SaveChangesAsync();
                    return Ok("Código correto");
                }
                return NotFound("Código incorreto");
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
