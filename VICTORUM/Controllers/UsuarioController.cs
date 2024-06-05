using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VICTORUM.Domain;
using VICTORUM.Interface;
using VICTORUM.Repository;
using WebAPI.ViewModels;
using VICTORUM.Utils.BlobStorage;


namespace VICTORUM.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository? usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        [HttpPut("AlterarSenha")]
        public IActionResult AtualizarSenha(string email, string senha)
        {
            try
            {
                usuarioRepository!.AlterarSenha(email, senha!);

                return Ok("Senha alterada com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult BuscarPorId(Guid id )
        {
            try
            {
                return Ok(usuarioRepository!.BuscarPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
             
        }

        [HttpGet("BuscarPorEmailESenha")]
        public IActionResult BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                return Ok(usuarioRepository?.BuscarPorEmailESenha(email, senha));
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPut("AlterarFotoPerfil")]
        public async Task<IActionResult> CarregarFotoUsuario(Guid id, [FromForm] UsuarioViewModel user)
        {
            try
            {
                UsuarioDomain usuarioBuscado = usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado == null)
                {
                    return NotFound();
                }

                // Lógica para o upload de imagem
                // String de conexão com o serviço Azure
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=techschoolg05t;AccountKey=0dOGfpvNEnUQ1wJfkxtn2L61EeimbPNDV/LGoYPxdK0rRGO3CR6RuZWxgp+eYE0nExmzDdcehrqg+AStGPrZfw==;EndpointSuffix=core.windows.net";

                // Nome do Blob
                var containerName = "techschoolcontainer";

                // Realiza o upload de imagem e guarda a url da imagem na variável
                string photoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(user.Arquivo!, connectionString, containerName);
                // Fim da lógica para upload de imagem

                // usuarioBuscado.Foto = photoUrl;
                usuarioRepository.AtualizarFoto(id, photoUrl);

                return Ok(photoUrl);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }  
    }
}
