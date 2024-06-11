  
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VICTORUM.ViewModels
{
    public class ProfessorViewModel
    {
        public string? Nome { get; set; }

        public string? Email { get; set; }

        public string? Senha { get; set; }

        public Guid Materia { get; set; }

        public Guid IdTipoUsuario { get; set; } 

        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        public string? Foto { get; set; }
    }
}
