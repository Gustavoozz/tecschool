using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VICTORUM.Domains;

namespace VICTORUM.Domain
{
    [Table("Usuarios")]
    [Index(nameof(Email), IsUnique = true)]

    public class UsuarioDomain
    {
        [Key()]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O email é obrigatório!!!")]
        [EmailAddress]
        public string? Email { get; set; }

        [Column(TypeName = "VARCHAR(200)")]
        [Required(ErrorMessage = "Senha obrigatória!!!")]
        public string? Senha { get; set; }

        [Column(TypeName = "VARCHAR(200)")]
        public string? Nome { get; set; }

        [Column(TypeName = "VARCHAR(200)")]
        public string? Foto { get; set; }
        public virtual AlunoDomain? Aluno { get; set; }
        public virtual ProfessorDomain? Professor { get; set; }

        public virtual TiposUsuarioDomain? TiposUsuario { get; set; }


        [Column(TypeName = "SMALLINT")]
        public int? CodRecupSenha { get; set; }
    }
}
