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
<<<<<<< HEAD
        public string? Foto { get; set; }
=======
        public string? Foto { get; set; }   
>>>>>>> d81b31c0c07cca5124980c1976e1857a638e2f7a
        public virtual AlunoDomain? Aluno { get; set; }
        public virtual ProfessorDomain? Professor { get; set; }

        public Guid? TipoUsuarioId { get; set; }
        [ForeignKey("TipoUsuarioId")]
        public TiposUsuarioDomain? TiposUsuario { get; set; }
        [Column(TypeName = "SMALLINT")]
        public int? CodRecupSenha { get; set; }
    }
}
