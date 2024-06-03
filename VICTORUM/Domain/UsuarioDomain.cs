using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Usuario")]
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

            public Guid IdAluno { get; set; }

            [ForeignKey("IdAluno")]
            public AlunoDomain? Aluno { get; set; }

            public Guid IdProfessor { get; set; }

            [ForeignKey("IdProfessor")]
            public AlunoDomain? Professor { get; set; }
        
    }
}
