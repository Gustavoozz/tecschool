using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VICTORUM.ViewModels
{
    public class UsuarioFotoViewModel
    {
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        public string? Foto { get; set; }
    }
}
