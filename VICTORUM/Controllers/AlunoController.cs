using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using VICTORUM.Domain;
using VICTORUM.Domains;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.Utils.BlobStorage;
using VICTORUM.Utils.Mail;
using WebAPI.ViewModels;

namespace VICTORUM.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : Controller
    {
        private IAlunoRepository? alunoRepository { get; set; }
        private EmailSendingService? _emailSendingService;

        public AlunoController(EmailSendingService emailSendingService)
        {
            alunoRepository = new AlunoRepository();
            _emailSendingService = emailSendingService;
        }



        [HttpGet("PerfilLogado")]
        public IActionResult GetLogado()
        {
            try
            {
                Guid idUsuario = Guid.Parse(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(alunoRepository?.BuscarPorId(idUsuario));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[Authorize]
        [HttpGet("BuscarPorId")]
        public IActionResult BuscarPorId(Guid id)
        {
            return Ok(alunoRepository?.BuscarPorId(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm]  AlunoViewModel alunoModel)
        {
            try
            {
                //objeto a ser cadastrado
                UsuarioDomain user = new UsuarioDomain
                {
                    Nome = alunoModel.Nome,
                    Email = alunoModel.Email,
                    Senha = alunoModel.Senha,
                    Foto = alunoModel.Foto,
                    TipoUsuarioId = alunoModel.IdTipoUsuario,
                };

                var connectionString = "DefaultEndpointsProtocol=https;AccountName=techschool;AccountKey=QI78t+uLjT1Ncl2pJZrd+ZDLHSa5UXzINnftb1dnUgataSzCArskVAqIHZXp4qMe8HjXs8ZjXWMO+AStb7Fx3w==;EndpointSuffix=core.windows.net";

                // Nome do Blob
                var containerName = "techschool";

                //aqui vamos chamar o método para upload da imagem
                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(alunoModel.Arquivo!, connectionString, containerName);

                //define o aluno

                Random random = new Random();
                user.Aluno = new AlunoDomain
                {
                    RA = random.Next(00000000, 99999999).ToString(),
                    IdTurma = alunoModel.IdTurma,
                    IdAluno = user.IdUsuario,
                    IdUsuario = user.IdUsuario
                };

                alunoRepository!.Cadastrar(user);

                await _emailSendingService!.SendWelcomeEmail(user.Email!, user.Nome!);

                return Ok("Usuário cadastrado com sucesso");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ListarPorTurma")]
        public List<AlunoDomain> Get(Guid IdTurma)
        {
            try
            {
                return alunoRepository!.ListarPorTurma(IdTurma);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
