
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VICTORUM.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Email obrigatório!!!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória!!!")]
        public string? Senha { get; set; }
    }
}
