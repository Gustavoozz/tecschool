using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using VICTORUM.Domain;
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

        public AlunoController()
        {
            alunoRepository = new AlunoRepository();
        }



        [HttpGet("PerfilLogado")]
        public IActionResult GetLogado()
        {
            try
            {
                Guid idUsuario = Guid.Parse(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(alunoRepository.BuscarPorId(idUsuario));

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
            return Ok(alunoRepository.BuscarPorId(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm]  AlunoViewModel alunoModel)
        {
            try
            {
                //objeto a ser cadastrado
                UsuarioDomain user = new UsuarioDomain();
                Random random = new Random();

                //recebe os valores e preenche as propriedades do objeto
                user.Nome = alunoModel.Nome;
                user.Email = alunoModel.Email;
                user.Senha = alunoModel.Senha;
                user.Foto = alunoModel.Foto;

                var containerName = "techschoolcontainer";

                //define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=techschoolg05t;AccountKey=0dOGfpvNEnUQ1wJfkxtn2L61EeimbPNDV/LGoYPxdK0rRGO3CR6RuZWxgp+eYE0nExmzDdcehrqg+AStGPrZfw==;EndpointSuffix=core.windows.net\";";
                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(alunoModel.Arquivo!, connectionString, containerName);

                user.Aluno = new AlunoDomain();

                user.Aluno.IdTurma = alunoModel.Turma;
                user.Aluno.RA = random.Next(00000000, 99999999).ToString();
                user.Aluno.IdAluno = user.IdUsuario;

                //define o nome do container do blob
                

                //aqui vamos chamar o método para upload da imagem
                

                alunoRepository!.Cadastrar(user);

                await _emailSendingService!.SendWelcomeEmail(user.Email!, user.Nome!);

                return Ok(user);
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
