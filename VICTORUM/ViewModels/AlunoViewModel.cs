using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
// using WebAPI.Domains;

namespace WebAPI.ViewModels
{
    public class AlunoViewModel
    {
        
        public string? Nome { get; set; }

        public string? Email { get; set; }

        public string? Senha { get; set; }

        public Guid IdTipoUsuario { get; set; }

        public Guid IdTurma {  get; set; }
        
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        public string? Foto { get; set; }

    }
}
