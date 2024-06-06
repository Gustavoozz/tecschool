﻿using Microsoft.AspNetCore.Mvc;

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
                UsuarioDomain user = new UsuarioDomain();
                Random random = new Random();

                //recebe os valores e preenche as propriedades do objeto
                user.Nome = professorModel.Nome;
                user.Email = professorModel.Email;
                user.Senha = professorModel.Senha;
                user.Foto = professorModel.Foto;

                user.TipoUsuarioId = professorModel.IdTipoUsuario;

                var containerName = "techschoolcontainer";

                //define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=techschoolg05t;AccountKey=0dOGfpvNEnUQ1wJfkxtn2L61EeimbPNDV/LGoYPxdK0rRGO3CR6RuZWxgp+eYE0nExmzDdcehrqg+AStGPrZfw==;EndpointSuffix=core.windows.net\";";
                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(professorModel.Arquivo!, connectionString, containerName);

                user.Professor = new ProfessorDomain();

                user.Professor.IdMateria = professorModel.Materia;

                user.Professor.IdProfessor = user.IdUsuario;

                //define o nome do container do blob



                //aqui vamos chamar o método para upload da imagem


                professorRepository!.Cadastrar(user);

               // await _emailSendingService!.SendWelcomeEmail(user.Email!, user.Nome!);

                return Ok(user);
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

