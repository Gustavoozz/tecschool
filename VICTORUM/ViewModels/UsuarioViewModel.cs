using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.ViewModels
{
    public class UsuarioViewModel
    {
        public string? Nome { get; set; }
        public string? Email { get; set; }
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        public string? Foto { get; set; }

    }
}
