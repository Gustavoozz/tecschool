using Microsoft.AspNetCore.Mvc;

using System;
using System.IdentityModel.Tokens.Jwt;
using VICTORUM.Domain;
using VICTORUM.Domains;
using VICTORUM.Interface;
using VICTORUM.Repository;
using VICTORUM.Utils.BlobStorage;
using VICTORUM.Utils.Mail;
using VICTORUM.ViewModels;


namespace VICTORUM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessorController : Controller
    {
        private IProfessorRepository? professorRepository { get; set; }
        private EmailSendingService? _emailSendingService;

        public ProfessorController()
        {
            professorRepository = new ProfessorRepository();
        }

        [HttpGet("PerfilLogado")]
        public IActionResult GetLogado()
        {
            try
            {
                Guid idUsuario = Guid.Parse(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(professorRepository!.BuscaPorId(idUsuario));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[Authorize]
        [HttpGet("BuscaPorId")]
        public IActionResult BuscarPorId(Guid id)
        {
            return Ok(professorRepository!.BuscaPorId(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ProfessorViewModel professorModel)
        {
            try
            {
                //objeto a ser cadastrado
                UsuarioDomain user = new UsuarioDomain
                {
                    Nome = professorModel.Nome,
                    Email = professorModel.Email,
                    Senha = professorModel.Senha,
                    Foto = professorModel.Foto,
                    TipoUsuarioId = professorModel.IdTipoUsuario
                };

                var connectionString = "DefaultEndpointsProtocol=https;AccountName=techschool;AccountKey=QI78t+uLjT1Ncl2pJZrd+ZDLHSa5UXzINnftb1dnUgataSzCArskVAqIHZXp4qMe8HjXs8ZjXWMO+AStb7Fx3w==;EndpointSuffix=core.windows.net";

                // Nome do Blob
                var containerName = "techschool";
                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(professorModel.Arquivo!, connectionString, containerName);

                user.Professor = new ProfessorDomain
                {
                    IdMateria = professorModel.Materia,
                    IdProfessor = user.IdUsuario
                };


                professorRepository!.Cadastrar(user);

                return Ok("Usuário cadastrado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ListarTodos")]
        public List<ProfessorDomain> Get()
        {
            try
            {
                return professorRepository!.ListarTodos();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

